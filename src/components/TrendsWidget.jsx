import { TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const trends = [
  { tag: "#Badminton", posts: "4.1k posts" },
  { tag: "#10KTrai...", posts: "3.2k posts" },
  { tag: "#EpicSaves", posts: "2.7k posts" },
];

export const TrendsWidget = () => {
  return (
    <div className="bg-trend-bg border border-border rounded-xl p-6 mb-6">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="w-5 h-5 text-foreground" />
        <h3 className="text-lg font-semibold text-foreground">Recent Trends</h3>
      </div>

      <div className="space-y-4">
        {trends.map((trend, index) => (
          <div key={index} className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-accent" />
                <span className="font-medium text-foreground">{trend.tag}</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">{trend.posts}</p>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="border-border text-foreground hover:bg-nav-hover"
            >
              View
            </Button>
          </div>
        ))}

        <Button
          variant="ghost"
          className="w-full justify-between text-muted-foreground hover:text-foreground mt-4"
        >
          <span>View all trends</span>
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};
