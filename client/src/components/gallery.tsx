import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { X, ZoomIn, Camera } from "lucide-react";
import type { GalleryImage } from "@shared/schema";

interface GalleryProps {
  images: GalleryImage[];
  isLoading: boolean;
}

export function Gallery({ images, isLoading }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <section id="gallery" className="py-24 bg-background relative overflow-hidden" data-testid="section-gallery">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2E7D32]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1976D2]/8 dark:bg-chart-1/10 mb-5">
            <Camera className="w-3.5 h-3.5 text-[#1976D2]" />
            <span className="font-heading font-semibold text-xs uppercase tracking-widest text-[#1976D2] dark:text-chart-1" data-testid="text-gallery-label">
              Gallery
            </span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-5" data-testid="text-gallery-title">
            Moments on the Court
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Relive the fun, the matches, and the friendships made at Sunward Park.
          </p>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-80 rounded-2xl" />
            ))}
          </div>
        ) : images.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-20 h-20 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-5">
              <Camera className="w-10 h-10 text-muted-foreground" />
            </div>
            <p className="text-muted-foreground text-lg font-medium">Photos coming soon!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <button
                key={image.id}
                onClick={() => setSelectedImage(image)}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#2E7D32] focus:ring-offset-2 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                  index === 0 ? "sm:row-span-2 sm:h-full" : ""
                }`}
                data-testid={`gallery-image-${image.id}`}
              >
                <img
                  src={image.imageUrl}
                  alt={image.caption || "Tennis community photo"}
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                    index === 0 ? "h-72 sm:h-full" : "h-72"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {image.caption && (
                      <p className="text-white text-sm font-semibold leading-snug">{image.caption}</p>
                    )}
                    {image.eventName && (
                      <p className="text-white/60 text-xs mt-1.5 font-medium">{image.eventName}</p>
                    )}
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                    <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20">
                      <ZoomIn className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
          data-testid="gallery-lightbox"
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors border border-white/10 z-10"
            data-testid="button-close-lightbox"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="max-w-5xl max-h-[85vh] relative" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.imageUrl}
              alt={selectedImage.caption || "Tennis community photo"}
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
              data-testid="img-lightbox"
            />
            {(selectedImage.caption || selectedImage.eventName) && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8 rounded-b-xl">
                {selectedImage.caption && (
                  <p className="text-white font-heading font-semibold text-lg">{selectedImage.caption}</p>
                )}
                {selectedImage.eventName && (
                  <p className="text-white/60 text-sm mt-1.5 font-medium">{selectedImage.eventName}</p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
