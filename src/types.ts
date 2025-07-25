// From the API
export class Order {
  id: string = ''
  orderId: string = '0'
  tokenId: string = '0'
  amount: string = '0'
  amountRemaining: string = '0'
  cost: string = '0'
  price: string = '0'
  isBuyOrder: boolean = false
  maker: string = ''
  claimable: boolean = false
  tokenAmountClaimable: string = '0'
  nftAmountClaimable: string = '0'
  timestamp: string = '0'
  blockNumber: string = '0'
  hash: string = ''
  lastTradedTimestamp: string = '0'
  lastTradedBlockNumber: string = '0'
  quote: string = ''
}

export class PriceLevel {
  id: string = ''
  tokenId: string = '0'
  price: string = '0'
  totalAmount: string = '0'
  totalOrders: string = '0'
  isBuyOrder: boolean = false
  quote: string = ''
}

export class TokenInfo {
  id: string = ''
  tokenId: string = '0'
  tick: string = '0'
  minQuantity: string = '0'
  isTradeable: boolean = false
  lastTradedPrice: string = '0'
  lastTradedQuantity: string = '0'
  lastTradedTimestamp: string = '0'
  lastTradedWasBuy: boolean = false
  quote: string = ''
}

export class FailedOrder {
  id: string = ''
  tokenId: string = '0'
  amount: string = '0'
  price: string = '0'
  maker: string = ''
  isBuyOrder: boolean = false
  timestamp: string = '0'
  blockNumber: string = '0'
  quote: string = ''
}

export class SoldHistory {
  id: string = ''
  tokenId: string = '0'
  amount: string = '0'
  price: string = '0'
  cost: string = '0'
  maker: string = ''
  taker: string = ''
  timestamp: string = '0'
  blockNumber: string = '0'
  isBuyOrder: boolean = false
  hash: string = ''
  quote: string = ''
  orderId: string = ''
}

export class OrderSoldAggregator {
  id: string = ''
  tokenId: string = '0'
  quote: string = ''
  timestamp: string = '0'
  totalCost: string = '0'
  totalQuantity: string = '0'
  firstPrice: string = '0'
  lastPrice: string = '0'
  minPrice: string = '0'
  maxPrice: string = '0'
}

export class CoreData {
  id: string = ''
  quote: string = ''
  quantityTick: string = '0'
  orderBookFeeMakerBps: string = '0'
  orderBookFeeTakerBps: string = '0'
}

export enum OrderSide {
  Buy,
  Sell,
}

export class BurnedAirdropData {
  id: string = ''
  tokenId: string = '0'
  amount: string = '0'
  timestamp: string = '0'
}

export class BurnedAirdropDayData {
  id: string = ''
  tokenId: string = '0'
  amount: string = '0'
  burnEvents: string = '0'
  timestamp: string = '0'
}


export class ClaimedAirdropData {
  id: string = ''
  tokenId: string = '0'
  amount: string = '0'
  timestamp: string = '0'
}

export class ClaimedAirdropDayData {
  id: string = ''
  tokenId: string = '0'
  amount: string = '0'
  claimEvents: string = '0'
  timestamp: string = '0'
}

// Smart contracts
export class LimitOrder {
  side: OrderSide = OrderSide.Buy
  tokenId: string = ''
  price: string = ''
  quantity: string = ''
  onlyPost: boolean = false
  onlyExactPriceIfMaker: boolean = false // If true, the order will only be placed if the price is exactly the same as the current best price for that side
}

export class MarketOrder {
  side: OrderSide = OrderSide.Buy
  tokenId: string = ''
  quantity: string = ''
  totalCost: string = ''
  useExactQuantity: boolean = true // If false then quantity is treated as minQuantity, useful for market order buying
}