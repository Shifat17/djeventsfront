import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';
import qs from 'qs';
import { useRouter } from 'next/router';
import EventItem from '@/components/EventItem';
export default function SearchPage({ events }) {
  console.log(events);
  const router = useRouter();
  return (
    <Layout title="Search Results">
      <h1>Search results from {router.query.term}</h1>
      {events.length === 0 && <h3>No Events to SHow</h3>}
      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}
    </Layout>
  );
}

export async function getServerSideProps({ query: { term } }) {
  const query = qs.stringify({
    _where: {
      _or: [
        { name_contains: term },
        { performers_contains: term },
        { description_contains: term },
        { venue_contains: term },
      ],
    },
  });
  const res = await fetch(`${API_URL}/events?${query}`);
  const events = await res.json();
  console.log(events);
  return {
    props: { events },
  };
}
