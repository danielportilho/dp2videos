import { SafeHtml, SafeUrl } from "@angular/platform-browser";

export class Video {
    id: number;
    title: string;
    category: string;
    label: SafeUrl;
    video: string;
}
