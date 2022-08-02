import { client } from "../libs/client";

export default function Home({ videos }: {videos: any}) {
  return (
    <div>
      <h1>TOP</h1>
      <ul>
        {videos.contents.map(( video: any ) => (
          <li key={video.id}>
            <a>{video.title}</a>
            <iframe
              width="560"
              height="315"
              src={video.url}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen>
            </iframe>
          </li>
        ))}
      </ul>
    </div>
  )
}

async function getVideos() {
  const data = await client.get({ endpoint: "videos" });
  return data
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const videos = await getVideos()

  return {
    props: {
      videos: videos
    },
  };
};
