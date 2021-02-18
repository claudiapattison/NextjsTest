import { createDeliveryClient} from '../lib/kontentClient';
import homeApi from "../lib/home/api";
import Hero from '../components/Hero';


export default function Home({ page }) {
  return (
    <main >
      <Hero hero={page.hero} />
    </main>
  )
}

export async function getStaticProps() {

  const deliveryClient = createDeliveryClient();

  const page = await homeApi(deliveryClient).getHomePage();

  return {
    props: { page },
  };
}