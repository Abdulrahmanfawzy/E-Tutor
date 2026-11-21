import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
import { CourseInstructor } from "../types/course";



interface CourseInstructorsProps {
    instructors: CourseInstructor[];
}

export function CourseInstructors({
    instructors,
}: CourseInstructorsProps) {
    return (
        <div className="flex items-center gap-3">
            <div className="flex -space-x-3">
                {instructors.map((instructor) => (
                    <Avatar
                        key={instructor.id}
                        className="size-9 border-2 border-white"
                    >
                        <AvatarImage
                            src={instructor.avatar}
                            alt={instructor.name}
                        />

                        <AvatarFallback>
                            {instructor.name
                                .split(" ")
                                .map((word) => word[0])
                                .join("")
                                .slice(0, 2)}
                        </AvatarFallback>
                    </Avatar>
                ))}
            </div>

            <div className="text-xs">
                <p className="text-muted-foreground">
                    Created by:
                </p>

                <p className="font-medium text-foreground">
                    {instructors.map((instructor) => instructor.name).join(" • ")}
                </p>
            </div>
        </div>
    );
}