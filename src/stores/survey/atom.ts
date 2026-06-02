import { atom } from 'jotai';
import type { Survey } from '../../types';

export const surveysAtom = atom<Survey>({
  id: 'test',
  surveys: [
    {
      sectionIndex: 1,
      question: [
        {
          title: '단답형',
          type: 'short',
          content: { shortText: 'lorem ipsum' },
        },
        {
          title: '장문형',
          type: 'long',
          content: {
            longText:
              'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.',
          },
        },
        {
          title: '객관식',
          type: 'multi',
          content: { options: ['김치', '사과', '배', '감귤'] },
        },
        {
          title: '체크박스',
          type: 'checkbox',
          content: { options: ['제주도', '홍콩', '싱가폴', '일본'] },
        },
        {
          title: '드롭다운',
          type: 'dropdown',
          content: { options: ['제주도', '홍콩', '싱가폴', '일본'] },
        },
        {
          title: '배율',
          type: 'rating',
          content: { start: 0, end: 5 },
        },
      ],
    },
    {
      sectionIndex: 2,
      question: [
        { title: '단답형', type: 'short', content: {} },
        { title: '장문형', type: 'long', content: {} },
        {
          title: '객관식',
          type: 'multi',
          content: { options: ['김치', '사과', '배', '감귤'] },
        },
        {
          title: '체크박스',
          type: 'checkbox',
          content: { options: ['제주도', '홍콩', '싱가폴', '일본'] },
        },
        {
          title: '드롭다운',
          type: 'dropdown',
          content: { options: ['제주도', '홍콩', '싱가폴', '일본'] },
        },
        {
          title: '배율',
          type: 'rating',
          content: { start: 0, end: 5 },
        },
      ],
    },
  ],
});
