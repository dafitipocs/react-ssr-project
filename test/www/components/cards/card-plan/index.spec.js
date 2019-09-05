/* eslint-disable no-undef */
import React from 'react';
import { should, expect } from 'chai';
import { enzyme, dom } from '../../../../utils';
import CardPlan from '../../../../../src/www/components/cards/card-plan';

dom.setup();
should();
describe('Testando componente CardPlan', () => {

  describe('Quando a propriedade plans for informada', () => {

    describe('Como number', () => {

      it('Deve retornar warning no console sobre a propriedade inválida', () => {

        try {
          enzyme.shallow(<CardPlan plans={123} />);
        }
        catch (exception) {
          exception.message.should.have.string('Warning: Failed prop type: Invalid prop '
                    + '`plans` of type `number` supplied to `CardPlan`, expected `array`');
        }
      });
    });
  });
});
