import About from '../pages/routerBase/About';
import Home from '../pages/routerBase/Home';
import News from '../pages/routerBase/News';
import Message from '../pages/routerBase/Message';

import { Navigate } from 'react-router-dom';
import Detail from '../pages/routerBase/Detail';
import Detail2 from '../pages/routerBase/Detail2';
import Message2 from '../pages/routerBase/Messag2';
import Message3 from '../pages/routerBase/Messag3';
import Detail3 from '../pages/routerBase/Detail3';
import Base from '../pages/reactDocs/Base';
import Test from '../pages/reactDocs/Test';
import Sharingdata from '../pages/reactDocs/Sharingdata';
import ExportTest from '../pages/reactDocs/ExportTest';
import LearnIf from '../pages/reactDocs/LearnIf';
import RenderingLists from '../pages/reactDocs/RenderingLists'
import RespondingToEvents from '../pages/reactDocs/RespondingToEvents';
import MailClient from '../pages/reactDocs/MailClient';
import FilterableList from '../pages/reactDocs/FilterableList';
import ReducerLearn from '../pages/reactDocs/reducer/ReducerLearn';
import ContextLearn from '../pages/reactDocs/context/ContextLearn';
import EscapeHatches from '../pages/reactDocs/escapeHatches/EscapeHatches';
import RefBase from '../pages/reactDocs/escapeHatches/RefBase'
import CustomHooksBase from '../pages/reactDocs/escapeHatches/CustomHooksBase';
const routes = [
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/home',
    element: <Home />,
    children: [
      {
        path: 'news',
        element: <News />
      },
      {
        path: 'message',
        element: <Message />,
        children: [
          {
            path: 'detail/:id/:title/:content',
            element: <Detail />
          }
        ]
      },
      {
        path: 'message2',
        element: <Message2 />,
        children: [
          {
            path: 'detail2',
            element: <Detail2 />
          }
        ]
      },
      {
        path: 'message3',
        element: <Message3 />,
        children: [
          {
            path: 'detail3',
            element: <Detail3 />
          }
        ]
      }
    ]
  },
  {
    path: '/reactDocs',
    children: [
      {
        path: 'base',
        element: <Base />
      },
      {
        path: 'test',
        element: <Test />,
        children: [
          {
            path: 'sharingdata',
            element: <Sharingdata />
          },
          {
            path: 'exporttest',
            element: <ExportTest />
          },
          {
            path: 'learnif',
            element: <LearnIf />
          },
          {
            path: 'renderinglists',
            element: <RenderingLists />
          }, {
            path: 'respondingtoevents',
            element: <RespondingToEvents />
          }, {
            path: 'mailclient',
            element: <MailClient />
          }, {
            path: 'filterablelist',
            element: <FilterableList />
          }
        ]
      }, {
        path: 'reducerlearn',
        element: <ReducerLearn />
      }, {
        path: 'contextLearn',
        element: <ContextLearn />
      }
      , {
        path: 'escapeHatches',
        element: <EscapeHatches />,
        children: [
          {
            path: 'refbase',
            element: <RefBase />
          },
          {
            path: 'customhooksbase',
            element: <CustomHooksBase />
          },
        ]
      }
    ]
  },
  {
    path: '/',
    element: <Navigate to="/about" />
  }
]

export default routes