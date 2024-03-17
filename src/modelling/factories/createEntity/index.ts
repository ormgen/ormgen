import { Mixins } from 'ormgen';
import { Factorized } from '~/helpers';
import { Entity } from '~/modelling/types';

interface Params {
	mx: Mixins;
}

export function createEntity(input: Factorized<Entity, Params>) {}
