import { MoreHorizontal, Heart, MessageCircle, Share } from "lucide-react";
import { Button } from "./ui/button";

interface FeedPostProps {
  author: {
    name: string;
    avatar: string;
    initials: string;
  };
  content: string;
  timeAgo: string;
  image?: string;
}

export const FeedPost = ({ author, content, timeAgo, image }: FeedPostProps) => {
  return (
    <div className="bg-post-bg border border-border rounded-xl p-6 mb-4">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
            <span className="text-accent-foreground font-semibold text-sm">{author.initials}</span>
          </div>
          <div>
            <h4 className="font-semibold text-foreground">{author.name}</h4>
            <p className="text-sm text-muted-foreground">{timeAgo}</p>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
          <MoreHorizontal className="w-4 h-4" />
        </Button>
      </div>
      
      <p className="text-foreground mb-4 leading-relaxed">{content}</p>
      
      {image && (
        <div className="mb-4 rounded-lg overflow-hidden">
          <img src={image} alt="Post content" className="w-full h-auto object-cover" />
        </div>
      )}
      
      <div className="flex items-center gap-6 pt-4 border-t border-border">
        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
          <Heart className="w-4 h-4 mr-2" />
          Like
        </Button>
        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
          <MessageCircle className="w-4 h-4 mr-2" />
          Comment
        </Button>
        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
          <Share className="w-4 h-4 mr-2" />
          Share
        </Button>
      </div>
    </div>
  );
};