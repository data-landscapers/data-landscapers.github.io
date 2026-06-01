#!/usr/bin/env python3
"""
generate_pdf_index.py
---------------------
Extracts text from portfolio PDFs and writes Jekyll stub files
into _pdf_index/ for Pagefind to index.

Run from your repo root:
    python generate_pdf_index.py

Requirements:
    pip install pdfplumber pyyaml
"""

import os
import re
import sys
import yaml
import pdfplumber

# ── Configuration ──────────────────────────────────────────────────────────────

REPO_ROOT      = os.path.dirname(os.path.abspath(__file__))
PDF_DIR        = os.path.join(REPO_ROOT, "assets", "pdfs")
PORTFOLIO_YML  = os.path.join(REPO_ROOT, "_data", "portfolio.yml")
OUTPUT_DIR     = os.path.join(REPO_ROOT, "_pdf_index")

# Pages to skip: cover (page 1) and last page (back matter/boilerplate)
SKIP_FIRST_N   = 1
SKIP_LAST_N    = 1

# ── Helpers ────────────────────────────────────────────────────────────────────

def slugify(text):
    """Convert a string to a URL-safe slug."""
    text = text.lower().strip()
    text = re.sub(r"[^\w\s-]", "", text)
    text = re.sub(r"[\s_]+", "-", text)
    text = re.sub(r"-+", "-", text)
    return text


def extract_text(pdf_path):
    """Extract body text from a PDF, skipping cover and back pages."""
    text_parts = []
    try:
        with pdfplumber.open(pdf_path) as pdf:
            total = len(pdf.pages)
            start = SKIP_FIRST_N
            end   = total - SKIP_LAST_N
            for i, page in enumerate(pdf.pages):
                if i < start or i >= end:
                    continue
                t = page.extract_text()
                if t:
                    text_parts.append(t)
    except Exception as e:
        print(f"  WARNING: could not extract text — {e}")
    return "\n".join(text_parts)


def clean_text(text):
    """Remove noise from extracted text."""
    lines = text.splitlines()
    cleaned = []
    for line in lines:
        line = line.strip()
        # Skip very short lines (page numbers, headers, footers)
        if len(line) < 4:
            continue
        # Skip lines that are just page numbers or devinit.org footers
        if re.match(r"^[\d\s]+$", line):
            continue
        if "devinit.org" in line.lower():
            continue
        cleaned.append(line)
    return " ".join(cleaned)


def load_portfolio():
    """Load portfolio.yml and return items that reference local PDFs."""
    with open(PORTFOLIO_YML, "r", encoding="utf-8") as f:
        items = yaml.safe_load(f)
    pdf_items = []
    for item in items:
        url = item.get("url", "")
        if url and url.startswith("/assets/pdfs/"):
            filename = url.replace("/assets/pdfs/", "")
            item["_filename"] = filename
            item["_pdf_path"] = os.path.join(PDF_DIR, filename)
            pdf_items.append(item)
    return pdf_items


def write_stub(item, text):
    """Write a Jekyll stub markdown file for Pagefind to index."""
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    # Use the PDF filename (minus extension) as the stub slug
    slug = item["_filename"].replace(".pdf", "")
    out_path = os.path.join(OUTPUT_DIR, f"{slug}.md")

    title       = item.get("title", slug)
    date        = item.get("date", "")
    description = item.get("description", "")
    category    = item.get("category", "")
    pdf_url     = item.get("url", "")

    # Strip markdown links from description for clean text
    description_clean = re.sub(r"\[([^\]]+)\]\([^\)]+\)", r"\1", str(description))

    front_matter = {
        "layout":      "pdf-index",
        "title":       title,
        "date_label":  date,
        "category":    category,
        "pdf_url":     pdf_url,
        "description": description_clean.strip(),
        "sitemap":     False,
    }

    stub = "---\n"
    stub += yaml.dump(front_matter, allow_unicode=True, default_flow_style=False)
    stub += "---\n\n"
    stub += f"{description_clean.strip()}\n\n"
    stub += text

    with open(out_path, "w", encoding="utf-8") as f:
        f.write(stub)

    return out_path


# ── Main ───────────────────────────────────────────────────────────────────────

def main():
    print(f"Loading portfolio from {PORTFOLIO_YML}")
    items = load_portfolio()
    print(f"Found {len(items)} PDF items in portfolio.yml\n")

    success = 0
    skipped = 0
    failed  = 0

    for item in items:
        title    = item.get("title", "?")
        pdf_path = item["_pdf_path"]
        filename = item["_filename"]

        print(f"Processing: {filename}")

        if not os.path.exists(pdf_path):
            print(f"  SKIPPED — file not found at {pdf_path}")
            skipped += 1
            continue

        text = extract_text(pdf_path)
        if not text.strip():
            print(f"  SKIPPED — no text extracted (possibly scanned)")
            skipped += 1
            continue

        text = clean_text(text)
        out_path = write_stub(item, text)
        print(f"  OK → {os.path.relpath(out_path, REPO_ROOT)}")
        success += 1

    print(f"\nDone. {success} stubs written, {skipped} skipped, {failed} failed.")
    print(f"Stubs written to: {OUTPUT_DIR}")


if __name__ == "__main__":
    main()
