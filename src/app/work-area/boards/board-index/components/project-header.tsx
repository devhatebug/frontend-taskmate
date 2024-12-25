import {
  Eye,
  Clock,
  Tag,
  MoreHorizontal,
  Share2,
  ShieldCheck,
  Flame,
  LockKeyhole,
} from "lucide-react";
import { Button } from "../../../../../components/ui/button";
import { Avatar, AvatarFallback } from "../../../../../components/ui/avatar";
import { Badge } from "../../../../../components/ui/badge";

export default function ProjectHeader() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Mindlax Redesign App</h1>
        <div className="flex items-center gap-2">
          <Button
            className="bg-blue-500 text-white"
            variant="ghost"
            size="icon"
          >
            <Share2 className="h-4 w-4" />
          </Button>
          <Button
            className="bg-blue-500 text-white"
            variant="ghost"
            size="icon"
          >
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex justify-between items-start flex-wrap">
        <div className="flex flex-col flex-wrap gap-4 justify-start items-start">
          <div className="flex items-center gap-2">
            <Eye className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">Visibility</span>
            <Badge
              className="bg-rose-100 text-red-500 flex items-center"
              variant="secondary"
            >
              <LockKeyhole className="h-3 w-3 mr-2" />
              <p>Private Board</p>
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">Created by</span>
            <Avatar className="h-8 w-8 border-2 border-background">
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <Flame className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">Assigned to</span>
            <div className="flex -space-x-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Avatar key={i} className="h-8 w-8 border-2 border-background">
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              ))}
              <Button
                variant="secondary"
                className="h-6 w-6 rounded-full text-xs font-medium"
              >
                +4
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">29 Jun 2024</span>
          </div>
          <div className="flex items-center gap-2">
            <Tag className="h-4 w-4 text-muted-foreground" />
            <Badge className="bg-sky-200 text-blue-500" variant="secondary">
              Mobile App Design
            </Badge>
            <Badge className="bg-yellow-200 text-amber-600" variant="secondary">
              Redesign
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}