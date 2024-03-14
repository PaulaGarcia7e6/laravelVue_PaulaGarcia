import axios from "axios";
import { Ref } from "nuxt/dist/app/compat/vue-demi";
import { Link, PaginatedResponse, RawLink } from "~~/types"
interface UseLinksOptions {
    queries?: Ref<Record<string,string | number>>;
}

export const useLinks = ({ queries = ref({}) }: UseLinksOptions = {}) => {
    const slug = "links";
    const paginatedData = ref<PaginatedResponse<Link>>();
    const item = ref<Link>();
    function adapter(link:RawLink):Link {
        return {
            ...link,
            created_at: new Date(link.created_at),
            updated_at: new Date(link.updated_at)
        }
    }
    async function index(qs?:Record<string,string | number>) {
        qs = {...queries.value,...qs};
        // @ts-expect-error
        const q = new URLSearchParams(qs).toString();
        const {data}= await axios.get<PaginatedResponse<RawLink>>(
            `/${slug}?${q}`
        )
        return (paginatedData.value = {
            ...data,
            data: data.data.map((i) => adapter(i)),
        })
    }
    watch(queries, index, { deep: true });
    async function find(id:string | number ) {
        const {data} = await axios.get<RawLink>(`/${slug}/${id}`);
        return (item.value = adapter(data));
    }
    async function create(payload:Partial<Link>) {
        const {data} = await axios.post<RawLink>(`/${slug}`,payload);
        return (item.value = adapter(data));
    }
    async function update(id:string | number, payload:Partial<Link>) {
        const {data} = await axios.put<RawLink>(`/${slug}/${id}`,payload);
        return (item.value = adapter(data));
    }
    async function destroy(id:string|number) {
        await axios.delete(`/${slug}/${id}`)        
    }
    return {
        index,
        create,
        find,
        update,
        destroy,
        data: paginatedData,
        link: item,
    }
}