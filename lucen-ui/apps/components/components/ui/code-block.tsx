"use client";

import { useState, useEffect } from 'react';
import { Copy, Check, Loader2 } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeBlockProps {
  filePath: string;
  language?: string;
  className?: string;
}

export function CodeBlock({ filePath, language = 'tsx', className }: CodeBlockProps) {
  const [code, setCode] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const fetchCode = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(`/api/source?path=${encodeURIComponent(filePath)}`);
        
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Failed to fetch code');
        }
        
        const data = await response.json();
        setCode(data.content);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
        console.error('Error fetching code:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCode();
  }, [filePath]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[300px] rounded-lg bg-black/20 backdrop-blur-sm border border-white/10">
        <div className="flex items-center gap-2 text-white/60">
          <Loader2 className="w-4 h-4 animate-spin" />
          <span>Loading code...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[300px] rounded-lg bg-red-900/20 backdrop-blur-sm border border-red-500/20">
        <div className="text-red-400 text-center">
          <p className="font-medium">Error loading code</p>
          <p className="text-sm text-red-300">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative group ${className || ''}`}>
      <div className="absolute top-3 right-3 z-10">
        <button
          onClick={copyToClipboard}
          className="flex items-center justify-center w-8 h-8 rounded-md bg-black/20 hover:bg-black/30 backdrop-blur-sm border border-white/20 text-white/80 hover:text-white transition-all duration-200"
          title={copied ? "Скопировано!" : "Копировать код"}
        >
          {copied ? (
            <Check className="w-4 h-4" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </button>
      </div>
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={{
          margin: 0,
          borderRadius: '0.5rem',
          fontSize: '14px',
          fontFamily: 'Fira Code, Monaco, Consolas, monospace',
          background: 'rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          maxHeight: '600px'
        }}
        codeTagProps={{
          style: {
            fontFamily: 'Fira Code, Monaco, Consolas, monospace',
            background: 'transparent'
          }
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
