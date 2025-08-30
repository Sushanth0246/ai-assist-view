import { Image, Video, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { useState } from "react";

export const PostCreator = () => {
  const [postContent, setPostContent] = useState("");

  return (
    <div className="bg-post-bg border border-border rounded-xl p-6 mb-6">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 bg-muted border border-border rounded-full flex items-center justify-center">
          <span className="text-foreground font-semibold">U</span>
        </div>
        
        <div className="flex-1">
          <Textarea
            placeholder="Share your achievement..."
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
            className="border-0 resize-none bg-transparent text-foreground placeholder:text-muted-foreground focus:ring-0 text-base"
            rows={3}
          />
          
          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-4">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                <Image className="w-4 h-4 mr-2" />
                Photo
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                <Video className="w-4 h-4 mr-2" />
                Video
              </Button>
            </div>
            
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <span className="mr-2">Post</span>
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};