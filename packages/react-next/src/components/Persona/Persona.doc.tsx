import * as React from 'react';
import { PersonaInitialsExample } from './examples/Persona.Initials.Example';

import { IDocPageProps } from '../../common/DocPage.types';
import { PersonaBasicExample } from './examples/Persona.Basic.Example';
import { PersonaAlternateExample } from './examples/Persona.Alternate.Example';
import { PersonaColorsExample } from './examples/Persona.Colors.Example';
import { PersonaCustomRenderExample } from './examples/Persona.CustomRender.Example';
import { PersonaCustomCoinRenderExample } from './examples/Persona.CustomCoinRender.Example';
import { UnknownPersonaExample } from './examples/Persona.UnknownPersona.Example';
import { PersonaPresenceExample } from './examples/Persona.Presence.Example';

const PersonaInitialsExampleCode = require('!raw-loader!./examples/Persona.Initials.Example.tsx') as string;
const PersonaBasicExampleCode = require('!raw-loader!./examples/Persona.Basic.Example.tsx') as string;
const PersonaAlternateExampleCode = require('!raw-loader!./examples/Persona.Alternate.Example.tsx') as string;
const PersonaColorsExampleCode = require('!raw-loader!./examples/Persona.Colors.Example.tsx') as string;
const PersonaCustomRenderExampleCode = require('!raw-loader!./examples/Persona.CustomRender.Example.tsx') as string;
const PersonaCustomCoinRenderExampleCode = require('!raw-loader!./examples/Persona.CustomCoinRender.Example.tsx') as string;
const UnknownPersonaExampleCode = require('!raw-loader!./examples/Persona.UnknownPersona.Example.tsx') as string;
const PersonaPresenceExampleCode = require('!raw-loader!./examples/Persona.Presence.Example.tsx') as string;

export const PersonaPageProps: IDocPageProps = {
  title: 'Persona',
  componentName: 'Persona',
  componentUrl:
    'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/Persona',
  examples: [
    {
      title: 'Persona in various sizes',
      code: PersonaBasicExampleCode,
      view: <PersonaBasicExample />,
    },
    {
      title: 'Alternative small personas',
      code: PersonaAlternateExampleCode,
      view: <PersonaAlternateExample />,
    },
    {
      title: 'Persona with initials',
      code: PersonaInitialsExampleCode,
      view: <PersonaInitialsExample />,
    },
    {
      title: 'PersonaCoin colors',
      code: PersonaColorsExampleCode,
      view: <PersonaColorsExample />,
    },
    {
      title: 'Rendering custom persona text',
      code: PersonaCustomRenderExampleCode,
      view: <PersonaCustomRenderExample />,
    },
    {
      title: 'Rendering custom coin',
      code: PersonaCustomCoinRenderExampleCode,
      view: <PersonaCustomCoinRenderExample />,
    },
    {
      title: 'Rendering unknown persona coin',
      code: UnknownPersonaExampleCode,
      view: <UnknownPersonaExample />,
    },
    {
      title: 'Persona Presence',
      code: PersonaPresenceExampleCode,
      view: <PersonaPresenceExample />,
    },
  ],
  overview: require<string>('!raw-loader!./docs/PersonaOverview.md'),
  bestPractices: '',
  dos: require<string>('!raw-loader!./docs/PersonaDos.md'),
  donts: require<string>('!raw-loader!./docs/PersonaDonts.md'),
  isHeaderVisible: true,
  isFeedbackVisible: true,
  allowNativeProps: true,
};
