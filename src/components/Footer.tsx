import { GraduationCap } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">ScriptieTutor</span>
          </div>
          
          <div className="text-center md:text-left">
            <p className="text-sm opacity-80">
              © 2024 ScriptieTutor. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
