import { NextRequest, NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { join } from 'path';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const filePath = searchParams.get('path');

  if (!filePath) {
    return NextResponse.json({ error: 'Path parameter is required' }, { status: 400 });
  }

  // Whitelist of allowed paths for security
  const allowedPaths = [
    'components/accordions/AccordionBlurText.tsx',
    'components/accordions/AccordionBento.tsx',
    'components/accordions/AccordionBorder.tsx',
    'components/ui/accordion.tsx'
  ];

  if (!allowedPaths.includes(filePath)) {
    return NextResponse.json({ error: 'File not allowed' }, { status: 403 });
  }

  try {
    const fullPath = join(process.cwd(), filePath);
    const fileContent = await readFile(fullPath, 'utf-8');
    
    return NextResponse.json({ 
      content: fileContent,
      path: filePath 
    });
  } catch (error) {
    console.error('Error reading file:', error);
    return NextResponse.json({ error: 'File not found' }, { status: 404 });
  }
}
