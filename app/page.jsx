import Feed from '@components/Feed';
import Button from '@components/Button';
const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Discover & Analyse
            <br className="max-md:hidden" />
        <span className="orange_gradient text-center">People's Opinions</span>
        </h1>
        <p className="desc text-center">
            Sentilysis is an open source web scrapping tool that analyses' peoples opinions and shows you the overall opinion
        </p>
        <Feed />
        <Button />
    </section>
  )
}

export default Home