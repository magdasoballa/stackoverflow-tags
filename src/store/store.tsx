import create, { SetState } from 'zustand';
import { Tag } from '../interfaces/tagsInterfaces';
import { APIKEY } from '../utils/const';

interface TagStore {
    tags: Tag[];
    loading: boolean;
    error: string | null;
    fetchTags: () => Promise<void>;
}

const useTagStore = create<TagStore>((set: SetState<TagStore>) => ({
    tags: [],
    loading: true,
    error: null,
    fetchTags: async () => {
        try {
            const response = await fetch(`https://api.stackexchange.com/2.3/tags?&site=stackoverflow&key=${APIKEY}`);
            const data = await response.json();

            set({ tags: data.items, loading: false, error: data?.error_message });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },
}));

export default useTagStore;
