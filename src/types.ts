// From the API
export class Order {
  id: string = ''
  orderId: string = '0'
  tokenId: string = '0'
  amount: string = '0'
  amountRemaining: string = '0'
  cost: string = '0'
  costRemaining: string = '0'
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
  orderBookFeeBps: string = '0'
}

export enum OrderSide {
  Buy,
  Sell,
}

// Smart contracts
export class LimitOrder {
  side: OrderSide
  tokenId: string = ''
  price: string = ''
  quantity: string = ''
  postOnly: boolean = false
}

export class MarketOrder {
  side: OrderSide = OrderSide.Buy
  tokenId: string = ''
  quantity: string = ''
  totalCost: string = ''
  useExactQuantity: boolean = true // If false then quantity is treated as minQuantity, useful for market order buying
}

export class CancelOrder {
  side: OrderSide = OrderSide.Buy
  tokenId: string = ''
  price: string = ''
}
