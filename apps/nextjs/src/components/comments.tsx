import { cn } from "@saasfly/ui";
import Marquee from "@saasfly/ui/marquee";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen product photos delivered so quickly. Snapparoo is amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Alex",
    username: "@alex",
    body: "Snapparoo has revolutionized our product launch process. We're weeks ahead of schedule now.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Shamoki",
    username: "@shamoki",
    body: "The quality of these photos is incredible. Our conversion rates have skyrocketed.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "王伟",
    username: "@wangwei",
    body: "Snapparoo的服务真是电商卖家的福音！我们的产品上架速度提高了很多。",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "김민수",
    username: "@kios",
    body: "Snapparoo의 서비스 덕분에 제품 사진 촬영 걱정이 사라졌습니다. 매우 만족스럽습니다.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "山田太郎",
    username: "@samtimkun",
    body: "Snapparooのサービスには本当に感謝しています。製品写真の品質が大幅に向上しました。",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

const Comments = () => {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background py-4 sm:py-20 md:py-20 xl:py-20">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
};

export { Comments };
