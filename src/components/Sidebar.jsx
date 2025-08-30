import { Home, Users, ShoppingBag, Calendar, UserPlus } from "lucide-react";
import { Button } from "./ui/button";

const navigationItems = [
  { icon: Home, label: "Home", active: true },
  { icon: Users, label: "Collaborate" },
  { icon: ShoppingBag, label: "Shopping" },
  { icon: Calendar, label: "Upcoming Competitions", badge: 3 },
  { icon: UserPlus, label: "Team Up" },
];

export const Sidebar = () => {
  return (
    <div className="w-64 bg-sidebar-bg border-r border-sidebar-border h-screen flex flex-col p-4">
      <div className="flex items-center gap-2 mb-8">
        <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">P</span>
        </div>
        <span className="text-xl font-bold text-foreground">Playure</span>
      </div>

      <nav className="space-y-2 flex-1">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          return (
            <Button
              key={item.label}
              variant="ghost"
              className={`w-full justify-start text-left h-12 px-3 ${
                item.active
                  ? "bg-nav-hover text-foreground"
                  : "text-muted-foreground hover:bg-nav-hover hover:text-foreground"
              }`}
            >
              <Icon className="w-5 h-5 mr-3" />
              <span className="flex-1">{item.label}</span>
              {item.badge && (
                <span className="ml-auto bg-accent text-accent-foreground text-xs px-2 py-1 rounded-full">
                  {item.badge}
                </span>
              )}
            </Button>
          );
        })}
      </nav>
    </div>
  );
};
