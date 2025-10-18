import React from "react";
import { Badge } from "./ui/badge";
import { CodeXml } from "lucide-react";

const Footer = () => {
  return (
    <footer className="p-8 text-xs text-center">
      <Badge variant={"outline"} className="rounded-full">
        <CodeXml className="h-4 w-4 mr-2" />
        Built using Next.js and shadcn/ui
      </Badge>
    </footer>
  );
};

export default Footer;
