import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { X, ZoomIn } from "lucide-react";
import type { GalleryImage } from "@shared/schema";

interface GalleryProps {
  images: GalleryImage[];
  isLoading: boolean;
}

export function Gallery({ images, isLoading }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <section id="gallery" className="py-20 bg-background" data-testid="section-gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block font-heading font-semibold text-sm uppercase tracking-wider text-[#2E7D32] dark:text-primary mb-3" data-testid="text-gallery-label">
            Gallery
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-4" data-testid="text-gallery-title">
            Moments on the Court
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Relive the fun, the matches, and the friendships made at Sunward Park.
          </p>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-72 rounded-md" />
            ))}
          </div>
        ) : images.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
              <ZoomIn className="w-8 h-8 text-muted-foreground" />
            </div>
            <p className="text-muted-foreground text-lg">Photos coming soon!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {images.map((image) => (
              <button
                key={image.id}
                onClick={() => setSelectedImage(image)}
                className="group relative rounded-md overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                data-testid={`gallery-image-${image.id}`}
              >
                <img
                  src={image.imageUrl}
                  alt={image.caption || "Tennis community photo"}
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    {image.caption && (
                      <p className="text-white text-sm font-medium">{image.caption}</p>
                    )}
                    {image.eventName && (
                      <p className="text-white/70 text-xs mt-1">{image.eventName}</p>
                    )}
                  </div>
                  <div className="absolute top-3 right-3">
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <ZoomIn className="w-4 h-4 text-white" />
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
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
          data-testid="gallery-lightbox"
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white z-10"
            data-testid="button-close-lightbox"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="max-w-5xl max-h-[85vh] relative" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.imageUrl}
              alt={selectedImage.caption || "Tennis community photo"}
              className="max-w-full max-h-[85vh] object-contain rounded-md"
              data-testid="img-lightbox"
            />
            {(selectedImage.caption || selectedImage.eventName) && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-md">
                {selectedImage.caption && (
                  <p className="text-white font-medium text-lg">{selectedImage.caption}</p>
                )}
                {selectedImage.eventName && (
                  <p className="text-white/70 text-sm mt-1">{selectedImage.eventName}</p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
