import { expect } from 'chai'

import { fp, toFP, toUSDC, toUSDT, toWBTC } from '../../src/numbers'

describe('numbers', () => {
  describe('fp', () => {
    it('converts to fp with the expected decimals', () => {
      expect(fp(0.1).toString()).to.be.equal('100000000000000000')
      expect(fp(1).toString()).to.be.equal('1000000000000000000')
      expect(fp(1.1).toString()).to.be.equal('1100000000000000000')
    })
  })

  describe('toFP', () => {
    it('converts to fp with the expected decimals', () => {
      expect(toFP(1, 6).toString()).to.be.equal('1000000')
      expect(toFP(1.1, 6).toString()).to.be.equal('1100000')

      expect(toFP(1, 18).toString()).to.be.equal('1000000000000000000')
      expect(toFP(1.1, 18).toString()).to.be.equal('1100000000000000000')

      expect(toFP(1, 20).toString()).to.be.equal('100000000000000000000')
      expect(toFP(1.1, 20).toString()).to.be.equal('110000000000000000000')
    })
  })

  describe('toWBTC', () => {
    it('converts to fp with the expected decimals', () => {
      expect(toWBTC(0.1).toString()).to.be.equal('10000000')
      expect(toWBTC(1).toString()).to.be.equal('100000000')
      expect(toWBTC(1.1).toString()).to.be.equal('110000000')
    })
  })

  describe('toUSDC', () => {
    it('converts to fp with the expected decimals', () => {
      expect(toUSDC(0.1).toString()).to.be.equal('100000')
      expect(toUSDC(1).toString()).to.be.equal('1000000')
      expect(toUSDC(1.1).toString()).to.be.equal('1100000')
    })
  })

  describe('toUSDT', () => {
    it('converts to fp with the expected decimals', () => {
      expect(toUSDT(0.1).toString()).to.be.equal('100000')
      expect(toUSDT(1).toString()).to.be.equal('1000000')
      expect(toUSDT(1.1).toString()).to.be.equal('1100000')
    })
  })
})