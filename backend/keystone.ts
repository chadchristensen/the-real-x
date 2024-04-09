// Welcome to Keystone!
//
// This file is what Keystone uses as the entry-point to your headless backend
//
// Keystone imports the default export of this file, expecting a Keystone configuration object
//   you can find out more at https://keystonejs.com/docs/apis/config

import { config } from '@keystone-6/core';

// to keep this file tidy, we define our schema in a different file
import { lists } from './schemas/schema';

// authentication is configured separately here too, but you might move this elsewhere
// when you write your list-level access control functions, as they typically rely on session data
import { withAuth, session } from './auth';
import { Context } from '.keystone/types';
import { insertSeedData } from './lib/seed-data';

const databaseURL =
  process.env.DATABASE_URL;

if (!databaseURL) throw Error('Need to set environment variable DATABASE_URL')

export default withAuth(
  config({
    db: {
      provider: 'postgresql',
      url: databaseURL,
      onConnect: async (context: Context) => {
        console.log('Connected to the database');
        // TODO: Set up seed data
        if (process.env.SEED_ME === 'true') await insertSeedData(context);
      },
      // Optional advanced configuration
      enableLogging: true,
      useMigrations: true,
      idField: { kind: 'uuid' }, // ? - What should I make this
      // shadowDatabaseUrl: 'postgres://dbuser:dbpass@localhost:5432/shadowdb'
    },
    lists,
    session,
  })
);
