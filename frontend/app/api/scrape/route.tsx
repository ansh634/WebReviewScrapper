// app/api/scrape/route.ts

import axios from 'axios';
import * as cheerio from 'cheerio';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { url } = await req.json();

    // Validate if it's an Amazon URL
    if (!url.includes('amazon')) {
      return NextResponse.json({ error: 'Invalid Amazon URL' }, { status: 400 });
    }

    // Fetch the HTML content
    const { data } = await axios.get(url, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept-Language': 'en-US,en;q=0.9',
      },
    });

    const $ = cheerio.load(data);

    // Extract product title
    const productTitle = $('#productTitle').text().trim() || 'Unknown Product';

    // Extract product rating
    const rating = $('.a-icon-alt').first().text().trim() || 'No rating';

    // Extract reviews
    const reviews: { Title: string; Author: string; Date: string; Rating: string; Review: string }[] = [];
    $('.review').each((i, el) => {
      reviews.push({
        Title: $(el).find('.review-title').text().trim() || 'No Title',
        Author: $(el).find('.a-profile-name').text().trim() || 'Anonymous',
        Date: $(el).find('.review-date').text().trim() || 'Unknown Date',
        Rating: $(el).find('.review-rating').text().trim() || 'No Rating',
        Review: $(el).find('.review-text').text().trim() || 'No Review',
      });
    });

    return NextResponse.json({ Product: productTitle, Rating: rating, Reviews: reviews });
  } catch (error) {
    console.error('Scraping Error:', error);
    return NextResponse.json({ error: 'Failed to scrape data' }, { status: 500 });
  }
}
