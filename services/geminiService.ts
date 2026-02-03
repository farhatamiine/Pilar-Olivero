import { Project, StoryResponse } from '../types';

export const generateProjectStory = async (project: Project): Promise<StoryResponse> => {
    await new Promise((r) => setTimeout(r, 1200));
    return {
        fragments: [
            { text: 'Observation is the first act of creation.', placement: 'top' },
            { text: 'Stillness contains the most movement.', placement: 'middle' },
            { text: 'Light breaks where no sun shines.', placement: 'bottom' },
        ],
        mood: 'Reflective',
        accentColor: '#E5E5E5',
    };
};
