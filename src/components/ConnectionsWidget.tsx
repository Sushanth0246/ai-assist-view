import { Users, UserPlus } from "lucide-react";
import { Button } from "./ui/button";

const suggestions = [
  { name: "A... B...", avatar: "AB" },
  { name: "D... R...", avatar: "DR" },
];

export const ConnectionsWidget = () => {
  return (
    <div className="bg-trend-bg border border-border rounded-xl p-6">
      <div className="flex items-center gap-2 mb-4">
        <Users className="w-5 h-5 text-foreground" />
        <h3 className="text-lg font-semibold text-foreground">Connecting to People</h3>
      </div>
      
      <div className="space-y-4">
        {suggestions.map((person, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                <span className="text-accent-foreground font-semibold text-sm">{person.avatar}</span>
              </div>
              <span className="font-medium text-foreground">{person.name}</span>
            </div>
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <UserPlus className="w-4 h-4 mr-1" />
              Connect
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};