import React, {Component} from 'react';

import PostItem from './PostItem';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Dayana Gonçalves',
          avatar: 'https://avatars2.githubusercontent.com/u/57035171?s=400&u=07318d97ac90daf96828d14bd7a1b15b0d73ee80&v=4'
        },
        date: '10min',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 2,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://avatars2.githubusercontent.com/u/2254731?v=4'
            },
            date: '02 Mar 2020',
            content:
              'A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)',
            time: '5min'

          }
        ]
      },
      {
        id: 3,
        author: {
          name: 'Beto Dantas',
          avatar: 'https://scontent.flis5-1.fna.fbcdn.net/v/t31.0-8/s960x960/22424614_1944454975777222_7892075775020523649_o.jpg?_nc_cat=106&_nc_sid=85a577&_nc_ohc=66MMtM8KBhEAX-4L31e&_nc_ht=scontent.flis5-1.fna&_nc_tp=7&oh=20b24d04be875c0f8167aa11a7c9dd42&oe=5EF3541E'
        },
        date: '02 Mar 2020',
        content:
          'Fala galera, beleza?\nEstou fazendo o Bootcamp GoStack e está sendo muito massa! Alguém mais aí fazendo? Comenta aí na publicação para trocarmos uma idéia',
        comments: [
          {
            id: 4,
            author: {
              name: 'Mayara Silva',
              avatar: 'https://scontent.flis5-1.fna.fbcdn.net/v/t1.0-9/81322772_2590515551046864_8502208566424240128_n.jpg?_nc_cat=103&_nc_sid=dd7718&_nc_ohc=6EGKgDdnsrkAX_G77Ps&_nc_ht=scontent.flis5-1.fna&oh=9a923cbd96133e3818c354eafc2de4be&oe=5EF5AC2C'
            },
            date: '04 Jun 2019',
            content:
              'Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios construída!',
            time: '2 dias'
          },
          {
            id: 5,
            author: {
              name: 'Luciana Costa',
              avatar: 'https://scontent.flis5-1.fna.fbcdn.net/v/t1.0-9/36324368_2650462751845910_3888977068439896064_n.jpg?_nc_cat=110&_nc_sid=7aed08&_nc_ohc=_nBA5SZZbO0AX9PIReU&_nc_ht=scontent.flis5-1.fna&oh=fb2bbc3afeeded45cfdfe57e0075b532&oe=5E81E406'
            },
            date: '04 Jun 2019',
            content:
              'Que maaaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes',
            time: '2 sem'
          }
        ]
      },
      {
        id: 6,
        author: {
          name: 'Genecildo Oliveira',
          avatar: 'https://scontent.flis5-1.fna.fbcdn.net/v/t1.0-9/s960x960/87964129_2611819685727958_7490061980812705792_o.jpg?_nc_cat=103&_nc_sid=85a577&_nc_ohc=TUX-LN729F0AX8Z4Mmc&_nc_ht=scontent.flis5-1.fna&_nc_tp=7&oh=21ef5a3daa2975c09b73d88d8ce40613&oe=5E97D5C4'
        },
        date: '04 Jun 2019',
        content:
          'Fala galera, beleza?\nEstou fazendo o Bootcamp GoStack e está sendo muito massa! Alguém mais aí fazendo? Comenta aí na publicação para trocarmos uma idéia',
        comments: [
          {
            id: 4,
            author: {
              name: 'Hygor Silva',
              avatar: 'https://scontent.flis5-1.fna.fbcdn.net/v/t31.0-8/p960x960/17039309_1040082349469778_1759500621952497918_o.jpg?_nc_cat=107&_nc_sid=85a577&_nc_ohc=yXGoHbXahHQAX-RtIQS&_nc_ht=scontent.flis5-1.fna&_nc_tp=6&oh=7d94b1e9c50d3ae41a1b76ece56d0bfc&oe=5E961255'
            },
            date: '04 Jun 2019',
            content:
              'Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios construída!',
              time: '20 min'
          },
          {
            id: 5,
            author: {
              name: 'Livya Oliveira',
              avatar: 'https://scontent.flis5-1.fna.fbcdn.net/v/t1.0-9/84124389_2628497063915379_3351817564702375936_n.jpg?_nc_cat=102&_nc_sid=8024bb&_nc_ohc=68Sfa9iXus4AX-igrr-&_nc_ht=scontent.flis5-1.fna&oh=df095a4292ced22d5f49e1a97e68be86&oe=5E96C463'
            },
            date: '04 Jun 2019',
            content:
              'Que maaaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes',
            time: '3 sem'
          }
        ]
      }
    ]
  };


  render () {
    const { posts } = this.state;

    return (
      <div className="postlist">
        {posts.map(post => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;