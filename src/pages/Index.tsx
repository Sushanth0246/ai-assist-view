import { Layout } from "@/components/Layout";
import { PostCreator } from "@/components/PostCreator";
import { TrendsWidget } from "@/components/TrendsWidget";
import { ConnectionsWidget } from "@/components/ConnectionsWidget";
import { FeedPost } from "@/components/FeedPost";

const Index = () => {
  return (
    <Layout>
      <div className="flex h-full overflow-hidden">
        {/* Main Content */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          <PostCreator />
          
          <div className="space-y-0">
            <FeedPost
              author={{
                name: "Aisha Khan",
                avatar: "",
                initials: "AK"
              }}
              content="Won the city badminton finals!

Proud moment! Sharing a few shots from the finals. Thanks to my coach and team."
              timeAgo="2h"
              image="/badminton-victory.png"
            />
            
            <FeedPost
              author={{
                name: "Mike Chen",
                avatar: "",
                initials: "MC"
              }}
              content="Amazing training session today! The team coordination is getting better every day. Looking forward to our next match this weekend."
              timeAgo="4h"
              image="/team-training.jpg"
            />
            
            <FeedPost
              author={{
                name: "Sarah Wilson",
                avatar: "",
                initials: "SW"
              }}
              content="Just completed my 10K training run. The weather was perfect and I beat my personal record by 2 minutes! #10KTrai #EpicSaves"
              timeAgo="6h"
              image="/running-achievement.jpg"
            />
          </div>
        </div>
        
        {/* Right Sidebar */}
        <div className="w-80 border-l border-border bg-background p-6 overflow-y-auto">
          <TrendsWidget />
          <ConnectionsWidget />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
