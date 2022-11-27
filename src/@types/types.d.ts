interface IVideo {
  id: number;
  title: string;
  description: string;
  author: string;
  avatar: string;
  date: string;
  duration: string;
  views: number;
  link: string;
  thumbnail: string;
  tags: string[];
  likes: number;
  unlikes: number;
}

type IVideos = IVideo[];

interface ITag {
  id: number;
  title: stiring;
  iconClass?: string;
}

type ITags = ITag[];

type IContent = JSX.Element;
