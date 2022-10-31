import type { Artist } from '../../types/artist';
import { useRouter } from 'next/router'; 
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function Artist() {
    const router = useRouter()
    const { data, error } = useSWR<Artist>(
        router.query.id ? `/api/artist/${router.query.id}` : null,
        fetcher
    );


    if (error) return <div> Failed to load artist </div>;
    if (!data) return <div> Loading... </div>;
    return <div>{data.name}</div>;
    
}

export default Artist;