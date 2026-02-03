
import React, { useState } from 'react';
import { Sparkles, Image as ImageIcon, Wand2, Loader2, Download, ShieldAlert } from 'lucide-react';
import { generateImage, editImage } from '../services/geminiService';

const Studio: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [size, setSize] = useState<"1K" | "2K" | "4K">("1K");
  const [resultImage, setResultImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState<'generate' | 'edit'>('generate');
  const [sourceImage, setSourceImage] = useState<string | null>(null);

  const handleAction = async () => {
    if (!prompt) return;

    // Check for API Key selection requirement for high-quality models if window.aistudio is available
    if (mode === 'generate' && (window as any).aistudio) {
      const hasKey = await (window as any).aistudio.hasSelectedApiKey();
      if (!hasKey) {
        await (window as any).aistudio.openSelectKey();
        // Proceeding as instructed by guidelines (assume success)
      }
    }

    setLoading(true);
    try {
      if (mode === 'generate') {
        const url = await generateImage(prompt, size);
        setResultImage(url);
      } else if (mode === 'edit' && sourceImage) {
        const url = await editImage(sourceImage, 'image/jpeg', prompt);
        setResultImage(url);
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setSourceImage(event.target?.result as string);
        setMode('edit');
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="studio" className="px-6 md:px-12 py-32 md:py-64 bg-neutral-900 text-white overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="flex flex-col gap-4 mb-16">
          <span className="text-xs uppercase tracking-[0.4em] text-white/30 font-bold">The Creative Lab</span>
          <div className="h-[1px] w-24 bg-white/20" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div className="flex flex-col gap-12">
            <h2 className="font-serif text-5xl md:text-7xl leading-tight tracking-tight">
              Develop your<br /><span className="italic text-white/40">visions.</span>
            </h2>
            
            <div className="space-y-8 bg-white/5 p-8 border border-white/10 backdrop-blur-sm">
              <div className="flex gap-4 mb-4">
                <button 
                  onClick={() => setMode('generate')}
                  className={`text-[10px] uppercase tracking-widest font-bold pb-2 border-b-2 transition-all ${mode === 'generate' ? 'border-white text-white' : 'border-transparent text-white/30'}`}
                >
                  Generate
                </button>
                <button 
                  onClick={() => setMode('edit')}
                  className={`text-[10px] uppercase tracking-widest font-bold pb-2 border-b-2 transition-all ${mode === 'edit' ? 'border-white text-white' : 'border-transparent text-white/30'}`}
                >
                  Edit
                </button>
              </div>

              {mode === 'edit' && (
                <div className="flex flex-col gap-4">
                  <label className="text-[10px] uppercase tracking-widest text-white/50">Source Image</label>
                  <div className="relative group cursor-pointer border-2 border-dashed border-white/10 hover:border-white/30 transition-all p-4 text-center">
                    <input type="file" onChange={handleFileUpload} className="absolute inset-0 opacity-0 cursor-pointer" accept="image/*" />
                    {sourceImage ? (
                      <img src={sourceImage} className="max-h-32 mx-auto grayscale" alt="Preview" />
                    ) : (
                      <div className="py-8 flex flex-col items-center gap-2 opacity-30">
                        <ImageIcon size={24} />
                        <span className="text-xs">Upload frame</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {mode === 'generate' && (
                <div className="flex flex-col gap-4">
                   <label className="text-[10px] uppercase tracking-widest text-white/50">Output Resolution</label>
                   <div className="flex gap-4">
                      {["1K", "2K", "4K"].map((s) => (
                        <button 
                          key={s}
                          onClick={() => setSize(s as any)}
                          className={`flex-1 py-2 text-xs border transition-all ${size === s ? 'bg-white text-black border-white' : 'border-white/10 text-white/50 hover:border-white/30'}`}
                        >
                          {s}
                        </button>
                      ))}
                   </div>
                   <p className="text-[10px] text-white/30 flex items-center gap-2">
                     <ShieldAlert size={12} /> Requires paid API key selection.
                   </p>
                </div>
              )}

              <div className="flex flex-col gap-4">
                <label className="text-[10px] uppercase tracking-widest text-white/50">Intent / Prompt</label>
                <textarea 
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder={mode === 'generate' ? "A lonely lighthouse in the mist..." : "Add a retro film filter and increase contrast..."}
                  className="bg-transparent border border-white/10 p-4 text-sm focus:outline-none focus:border-white/30 transition-all min-h-[120px] resize-none"
                />
              </div>

              <button 
                onClick={handleAction}
                disabled={loading || !prompt}
                className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest text-[10px] hover:invert transition-all disabled:opacity-50 flex items-center justify-center gap-4"
              >
                {loading ? <Loader2 className="animate-spin" size={16} /> : mode === 'generate' ? <Sparkles size={16} /> : <Wand2 size={16} />}
                {loading ? 'Processing Frame...' : mode === 'generate' ? 'Generate Vision' : 'Apply Modification'}
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden relative shadow-2xl">
              {resultImage ? (
                <>
                  <img src={resultImage} className="w-full h-full object-cover animate-in fade-in zoom-in duration-1000" alt="Generated" />
                  <a 
                    href={resultImage} 
                    download="pilar-vision.png"
                    className="absolute bottom-6 right-6 p-4 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-black transition-all"
                  >
                    <Download size={20} />
                  </a>
                </>
              ) : (
                <div className="flex flex-col items-center gap-4 opacity-10">
                   <Sparkles size={64} strokeWidth={1} />
                   <span className="font-serif text-2xl italic">Waiting for vision</span>
                </div>
              )}
              {loading && (
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center gap-4">
                   <div className="w-12 h-[1px] bg-white animate-pulse" />
                   <span className="text-[10px] uppercase tracking-[0.4em] animate-pulse">Developing Film...</span>
                </div>
              )}
            </div>
            
            <div className="absolute -bottom-8 -left-8 text-[10px] uppercase tracking-[0.2em] text-white/20 font-mono rotate-90 origin-top-left">
              Session_ID: {Math.random().toString(36).substring(7).toUpperCase()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Studio;
