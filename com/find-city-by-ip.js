/**
 * 通过 IP 地址来查找 IP 归属地的功能，不知道你有没有用过？没用过也没关系，你现在可以打开百度，在搜索框里随便输一个 IP 地址，就会看到它的归属地。
 * 这个功能并不复杂，它是通过维护一个很大的 IP 地址库来实现的。
 * 地址库中包括 IP 地址范围和归属地的对应关系。
 *
 * 当我们想要查询 202.102.133.13 这个 IP 地址的归属地时，我们就在地址库中搜索，
 * IP 地址落在[202.102.133.0, 202.102.133.255]这个地址范围内，那我们就可以将这个 IP 地址范围对应的归属地“山东东营市”显示给用户了。
 * [202.102.133.0, 202.102.133.255] 山东东营市
 * [202.102.135.0, 202.102.136.255] 山东烟台
 * [202.102.156.34, 202.102.157.255] 山东青岛
 * [202.102.48.0, 202.102.48.255] 江苏宿迁
 * [202.102.49.15, 202.102.51.251] 江苏泰州
 * [202.102.56.0, 202.102.56.255] 江苏连云港
 *
 * 现在我的问题是，在庞大的地址库中逐一比对 IP 地址所在的区间，是非常耗时的。
 * 假设我们有 12 万条这样的 IP 区间与归属地的对应关系，如何快速定位出一个 IP 地址的归属地呢？
 */

class Finder{
  constructor(m){
    this.ips = [];  // [begin, end, city]
    for (const [city, ip] of Object.entries(m)){
      this.ips.push([this.ipString2int(ip[0]), this.ipString2int(ip[1]), city]);
    }
    this.ips.sort((a, b) => a[0] - b[0]);
  }

  /**
   * @return city | null
   */
  find(target){
    target = this.ipString2int(target);

    // bin search
    const ips = this.ips;
    let l = 0, r = ips.length - 1;
    while (l < r){
      const mid = l + Math.trunc((r - l) / 2);
      if (ips[mid][0] >= target){
        r = mid;
      }else {
        l = mid + 1;
      }
    }
    // 二分找到的是下限大于等于目标值的值，所以需要判断下是否当前找到的是大于目标值的区间，如果是的话，需要前移一下
    if (ips[l][0] > target){
      l--;
    }
    const found = ips[l] ?? [-1, -1, null];
    if (target >= found[0] && target <= found[1]){
      return found[2];
    }else {
      return null;
    }
  }

  ipString2int(ip){
    let rtn = 0;
    const segments = ip.split('.');
    for (const segment of segments){
      rtn = rtn * (2 ** 8) + Number.parseInt(segment);
    }
    return rtn;
  }
}

const finder = new Finder({
  '上海': ['192.139.0.1', '193.140.255.255'],
  '深圳': ['107.10.0.1','108.10.255.255'],
});

console.log(finder.find('0.0.0.0'), null);
console.log(finder.find('255.255.255.255'), null);
console.log(finder.find('192.139.0.1'), '上海');
console.log(finder.find('192.139.10.1'), '上海');
console.log(finder.find('107.10.10.1'), '深圳');
console.log(finder.find('108.10.255.255'), '深圳');

/**
 * tag 字节跳动 二分查找
 * 当时大体上写出来了，但是二分最后处理的细节没写对
 */