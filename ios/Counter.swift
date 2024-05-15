//
//  Counter.swift
//  AwesomeProject
//
//  Created by Youhana Sheriff on 14/05/24.
//

import Foundation

@objc(Counter)
class Counter: NSObject {
  
  private var count = 0;
  
  @objc
  func increament() {
    count = count + 1;
  }
}
