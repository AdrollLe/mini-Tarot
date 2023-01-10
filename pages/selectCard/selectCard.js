// pages/selectCard/selectCard.js
//获取应用实例
var app = getApp()

const util = require("../../utils/util")

var allCard = ['card1',
  'card2',
  'card3',
  'card4',
  'card5',
  'card6',
  'card7',
  'card8',
  'card9',
  'card10',
  'card11',
  'card12',
  'card13',
  'card14',
  'card15',
  'card16',
  'card17',
  'card18',
  'card19',
  'card20',
  'card21',
  'card22',
  'card23',
  'card24',
  'card25',
  'card26',
  'card27',
  'card28',
  'card29',
  'card30',
  'card31',
  'card32',
  'card33',
  'card34',
  'card35',
  'card36',
  'card37',
  'card38',
  'card39',
  'card40',
  'card41',
  'card42',
  'card43',
  'card44',
  'card45',
  'card46',
  'card45',
  'card44',
  'card43'];

var allUrl = [
  'https://m.qpic.cn/psc?/V54GqyFi3LRHLj3NYbwy3c7HR82xCTpF/bqQfVz5yrrGYSXMvKr.cqZVwsx177KH*2deQy88OqNb*YdMS4eg6k*ypkynyygNbsM8jxx4B1qYhAQZLl8fC370gzJTE5.HjwuKWnPTPzIk!/b&bo=5wBiAecAYgEBByA!&rf=viewer_4',
  'https://m.qpic.cn/psc?/V54GqyFi3LRHLj3NYbwy3c7HR82xCTpF/bqQfVz5yrrGYSXMvKr.cqaDxm*B1Ra.wO*3XRjeVgLHTIV6r6Xl8DFemvxcrOR2IfHrwZuplBz9RCJwOfJxaqJzlUCfrawzXoUzw2ciuGcw!/b&bo=5wBgAecAYAEBByA!&rf=viewer_4',
  'https://m.qpic.cn/psc?/V54GqyFi3LRHLj3NYbwy3c7HR82xCTpF/bqQfVz5yrrGYSXMvKr.cqTBkVcaxuDAn.*QNK6vVQ2T1t1DytFN3G0Yk28XB*wPkicWKIMr4gaMxTm.F1GRkbg.eNuS32LC.UuvjEysvrsE!/b&bo=5QBgAeUAYAEBByA!&rf=viewer_4',
  'https://m.qpic.cn/psc?/V54GqyFi3LRHLj3NYbwy3c7HR82xCTpF/bqQfVz5yrrGYSXMvKr.cqXcfyQwSiiJAw0vcO87pJ.gm5z3u*43Xj.B0t8DyI1JfzmRrTclIlnPfISmFMt8ZVyHcqmuTZmoQGdJ0*i5.7zs!/b&bo=4gBkAeIAZAEBByA!&rf=viewer_4',
  'http://m.qpic.cn/psc?/V54GqyFi3LRHLj3NYbwy3c7HR82xCTpF/bqQfVz5yrrGYSXMvKr.cqTHhNDcOP6x7j87FCX8Xa4L371uBbtFpmgnG.I.sipmBJdm.4J.KkHhCD*zREVAKXQ7alzYScatXj*RryGq5Ae8!/b&bo=5gBjAeYAYwEBFzA!&rf=viewer_4',
  'https://m.qpic.cn/psc?/V54GqyFi3LRHLj3NYbwy3c7HR82xCTpF/bqQfVz5yrrGYSXMvKr.cqaX7sezzAkRnbWVs3Hk3*XOABWiILh*Jai2cMf1jslyA8I74BgwPPJdw5MN3kvb8AgGvFMKfsXND79E3BRfab40!/b&bo=7ABgAewAYAEBByA!&rf=viewer_4',
  'http://m.qpic.cn/psc?/V54GqyFi3LRHLj3NYbwy3c7HR82xCTpF/bqQfVz5yrrGYSXMvKr.cqa72FfjRL5lLFKDxaG8ojeiyxH1P6ZjUtTu7VMssh2o8I1aOqLdGk8BNjyFBFZd1E6gbpUGedVC7NsKsZeoErYw!/b&bo=6ABgAegAYAEBFzA!&rf=viewer_4',
  'http://m.qpic.cn/psc?/V54GqyFi3LRHLj3NYbwy3c7HR82xCTpF/bqQfVz5yrrGYSXMvKr.cqcYaWtjkhPp0Q8SJANBFeWndq0z9dX3RS5kX5yqUY0iF0SL6LFMkAlQuK98qxHfvtMLY5WNJsHlad*8isMjdWr4!/b&bo=5gBrAeYAawEBFzA!&rf=viewer_4',
  'https://m.qpic.cn/psc?/V54GqyFi3LRHLj3NYbwy3c7HR82xCTpF/bqQfVz5yrrGYSXMvKr.cqSFx4uajA8QpU2Q4vTXHlEtHxqpbDc1.41TsbPgOIVvFl9.sZsVFQTlUByjFHI.3xmWiVuHX4k1Im3ByjeJzVjg!/b&bo=6QBkAekAZAEBByA!&rf=viewer_4',
  'http://m.qpic.cn/psc?/V54GqyFi3LRHLj3NYbwy3c7HR82xCTpF/bqQfVz5yrrGYSXMvKr.cqd9tik11Vg7Kihv*DHpS79jBreEfIy*LNpUBVxCTn*YaZgwL25rZgotRAVVVaQmAQDeImhfQWn.PRJiKYlFS7gg!/b&bo=5wBhAecAYQEBFzA!&rf=viewer_4',
  'http://m.qpic.cn/psc?/V54GqyFi3LRHLj3NYbwy3c7HR82xCTpF/bqQfVz5yrrGYSXMvKr.cqb8sva8eWPVkVjeNS0Wp3r1hh7gKOYn9Vac3V12jDkK3cJfX*PQ5o5kp2jHtsseMSkBz5Jq8a30o.bRPu.VDQEc!/b&bo=5wBkAecAZAEBFzA!&rf=viewer_4',
  'http://m.qpic.cn/psc?/V54GqyFi3LRHLj3NYbwy3c7HR82xCTpF/bqQfVz5yrrGYSXMvKr.cqVrYuNi499uICpfiGEGQYbf5ybjhfBRaWkhWFm.sLC2FplZXWtI9muRBappmBOcInrqSe8P6vyzGn2C8u8OGcrg!/b&bo=5gBlAeYAZQEBFzA!&rf=viewer_4',
  'http://m.qpic.cn/psc?/V54GqyFi3LRHLj3NYbwy3c7HR82xCTpF/bqQfVz5yrrGYSXMvKr.cqd*9sB20hBy4XupwefUEzhj2J..j6MT7UM7NbQub*hy4j96.dQpbMIuXhKEjWGxpmVuuNVW3nvi7acCkWkPt2D8!/b&bo=5gBkAeYAZAEBFzA!&rf=viewer_4',
  'http://m.qpic.cn/psc?/V54GqyFi3LRHLj3NYbwy3c7HR82xCTpF/bqQfVz5yrrGYSXMvKr.cqXGdWaBX8k3TR8we9SlXBKGcnrDmFZbZd*sIZFQyZgmgarcmwqlHK6WYC.z25NeZgGqZwN8pLw5cESZWo5piFrc!/b&bo=5ABjAeQAYwEBFzA!&rf=viewer_4',
  'http://m.qpic.cn/psc?/V54GqyFi3LRHLj3NYbwy3c7HR82xCTpF/bqQfVz5yrrGYSXMvKr.cqV1izDUkpDQxMX89J.WAZ0nCcJ2bcyYgVQ7UVoVXxT8k6ahS99NWmWWrWxgXDnza8rPDjqh3jxkuUNaXinddX*M!/b&bo=6ABjAegAYwEBFzA!&rf=viewer_4',
  'https://m.qpic.cn/psc?/V54GqyFi3LRHLj3NYbwy3c7HR82xCTpF/bqQfVz5yrrGYSXMvKr.cqWO2mlIG2aZQkcYSwP*irbFvwhy5rU766T7QgrH5gebd5*mJluAeWA6K*voFrakBbBL0NBbfIUrmzVgI9MfxjhY!/b&bo=6ABlAegAZQEBByA!&rf=viewer_4',
  'https://m.qpic.cn/psc?/V54GqyFi3LRHLj3NYbwy3c7HR82xCTpF/bqQfVz5yrrGYSXMvKr.cqdXvEk6pXokYsmZKdHpAMzpo1WS86ga5xM.gEFrO4m0kqGxF8hNqPqAh3.iPedobs0nZslJUUzohSI7WueOsv5Y!/b&bo=6ABnAegAZwEBByA!&rf=viewer_4',
  'http://m.qpic.cn/psc?/V54GqyFi3LRHLj3NYbwy3c7HR82xCTpF/bqQfVz5yrrGYSXMvKr.cqZnWTb1j8JqRl5KO37m4eQE69SOaMl2sf132PwuFgKui2Ly8fcEXIwHQxn81UUay6RGvX30hf8uvyBYIm2qVKvg!/b&bo=6gBnAeoAZwEBFzA!&rf=viewer_4',
  'https://m.qpic.cn/psc?/V54GqyFi3LRHLj3NYbwy3c7HR82xCTpF/bqQfVz5yrrGYSXMvKr.cqcz2hjHLZBDFnP66D8tCjkRnmrAr37x8Pa7eeZZ*GdqJvIu3RnXEgTPQxVMlfgt95MQ1YJmV1WTh2JyU9s6p56w!/b&bo=7gBfAe4AXwEBByA!&rf=viewer_4',
  'http://m.qpic.cn/psc?/V54GqyFi3LRHLj3NYbwy3c7HR82xCTpF/bqQfVz5yrrGYSXMvKr.cqR4ZafHOtNMcp5bnnfqUgVFjMJT0kkjYtJS*ErMueM9pCW2XJrcQFJMqqcZShPgIiDBGqmyREYgftZWKPo7Ea4A!/b&bo=5wBiAecAYgEBFzA!&rf=viewer_4',
  'http://m.qpic.cn/psc?/V54GqyFi3LRHLj3NYbwy3c7HR82xCTpF/bqQfVz5yrrGYSXMvKr.cqd33mVCaaM*YQiX2x3DhI8ZLb1gtTMpVAW3GvZ3MCxdq9ekHQQX1jfWMor2j9pNMSzdRuHrKZ3JiL7AHruSeau8!/b&bo=5wBgAecAYAEBFzA!&rf=viewer_4',
  'http://m.qpic.cn/psc?/V54GqyFi3LRHLj3NYbwy3c7HR82xCTpF/bqQfVz5yrrGYSXMvKr.cqUfM*olzb7Be2H3JNCss5h3WvrqKdyW0AToaCsziqhZcOwX5Cs1mOq4RER2yMsEceT1ljsmLwaLVlZZ7aNy*vnc!/b&bo=5QBgAeUAYAEBFzA!&rf=viewer_4',
  'http://m.qpic.cn/psc?/V54GqyFi3LRHLj3NYbwy3c7HR82xCTpF/bqQfVz5yrrGYSXMvKr.cqZSecjy32EsKp8S*giSTjX.dIfbJXZL7sMi2eSpXCvFYlwOz4NasYNkzEKi50M847oNnnSh7P7ZKWhcx*jrPLCE!/b&bo=4gBkAeIAZAEBFzA!&rf=viewer_4',
  'http://m.qpic.cn/psc?/V54GqyFi3LRHLj3NYbwy3c7HR82xCTpF/bqQfVz5yrrGYSXMvKr.cqZEoMV9nmxNG00itww0SQkhe6nCqQG2YA20R8u29dpG5ktiF7oxyOUC*WD1scfJTlXR9CLafshdQuLoAyBWlcpY!/b&bo=5gBjAeYAYwEBFzA!&rf=viewer_4',
  'http://m.qpic.cn/psc?/V54GqyFi3LRHLj3NYbwy3c7HR82xCTpF/bqQfVz5yrrGYSXMvKr.cqTQIqq7LnFXCw.kdt9mEI4dAukFQPma*xVpA5Sj7QdJNAJRR0D7WRGgfUs50A3lFciHjOVm4dHvFR5hc8psx9I0!/b&bo=6ABnAegAZwEBFzA!&rf=viewer_4',
  'http://m.qpic.cn/psc?/V54GqyFi3LRHLj3NYbwy3c7HR82xCTpF/bqQfVz5yrrGYSXMvKr.cqaUvcx0kZnhIoTdZbbSsVu3412YdThd85Je1PiypsJbNniKCYJW4cuYxMEQXAwNPb6Bzv28TyR49YtjQ9RrMm*Y!/b&bo=7ABgAewAYAEBFzA!&rf=viewer_4',
  'http://m.qpic.cn/psc?/V54GqyFi3LRHLj3NYbwy3c7HR82xCTpF/bqQfVz5yrrGYSXMvKr.cqQJcHbPGCxwRla64kDLdg*khWZXDs2H71YF3i*iIJrLKquwlcoeAjPZXpWdbs1y1bXcS8knJIH69hWlMkvAuaOM!/b&bo=6ABgAegAYAEBFzA!&rf=viewer_4',
  'http://m.qpic.cn/psc?/V54GqyFi3LRHLj3NYbwy3c7HR82xCTpF/bqQfVz5yrrGYSXMvKr.cqQJcHbPGCxwRla64kDLdg*khWZXDs2H71YF3i*iIJrLKquwlcoeAjPZXpWdbs1y1bXcS8knJIH69hWlMkvAuaOM!/b&bo=6ABgAegAYAEBFzA!&rf=viewer_4',
  'http://m.qpic.cn/psc?/V54GqyFi3LRHLj3NYbwy3c7HR82xCTpF/bqQfVz5yrrGYSXMvKr.cqZZvlOadR98CqKTYdpobQSnjKGEpHwR4pqQfbdTVRC6xWNFps8.VKpRb561RfOd8RUIQ2ZLDZcZdDxSo53YZdtA!/b&bo=5gBrAeYAawEBFzA!&rf=viewer_4',
  'http://m.qpic.cn/psc?/V54GqyFi3LRHLj3NYbwy3c7HR82xCTpF/bqQfVz5yrrGYSXMvKr.cqWvTs1EOrwQmgrewUWF595QOA63CvzaTcF4.cEtsMPDw2w5I2HtMR.KVl8PRQHWwAVJhaB7MGiB3JXK7lgNfoZw!/b&bo=6QBkAekAZAEBFzA!&rf=viewer_4',
  'http://m.qpic.cn/psc?/V54GqyFi3LRHLj3NYbwy3c7HR82xCTpF/bqQfVz5yrrGYSXMvKr.cqbzCOoGy7AKj3SN3KG80Z6BF9wwIdpW*cPnQLRifMqLbuRyaPkkYic*1XQLyEhuJREmy*sXQRxDua0fzQCLwzH4!/b&bo=5wBhAecAYQEBFzA!&rf=viewer_4',
  'http://m.qpic.cn/psc?/V54GqyFi3LRHLj3NYbwy3c7HR82xCTpF/bqQfVz5yrrGYSXMvKr.cqdXW.FGIiNpEeOf*bmIGqOhXizh8Vt9eFAk82HmiizuVQoxAqlj7qWkkZpqsg6Z955YC8tOwkAhhd9Xvy3R0Us0!/b&bo=5wBkAecAZAEBFzA!&rf=viewer_4',
  'http://m.qpic.cn/psc?/V54GqyFi3LRHLj3NYbwy3c7HR82xCTpF/bqQfVz5yrrGYSXMvKr.cqYyEQWPlSdFKWcMTQ9il8FGLqlzyVI.OFlV3d2NUvv8Uu*HegHjy8MBdRvI1GjMo7IkD2xHLBM8m*xoWE7OPQO8!/b&bo=5gBlAeYAZQEBFzA!&rf=viewer_4',
  'http://m.qpic.cn/psc?/V54GqyFi3LRHLj3NYbwy3c7HR82xCTpF/bqQfVz5yrrGYSXMvKr.cqUi405zPziGCqymaq27zehJ9i9r9RSFEDG*4DdH8ZwMRj4CJY.3eWS4AGA*yn379xs66BqJAJ4QyzRdLrOxDHo8!/b&bo=5gBkAeYAZAEBFzA!&rf=viewer_4',
  'http://m.qpic.cn/psc?/V54GqyFi3LRHLj3NYbwy3c7HR82xCTpF/bqQfVz5yrrGYSXMvKr.cqYkm90wF2.wYEjjmx2R96pctmOSJk8NRKAgSsMhblu5M6ytcz00RhGBOKwWPM8x1XorkSdU4Q1BQtUk7vuYImUY!/b&bo=5ABjAeQAYwEBFzA!&rf=viewer_4',
  'http://m.qpic.cn/psc?/V54GqyFi3LRHLj3NYbwy3c7HR82xCTpF/bqQfVz5yrrGYSXMvKr.cqfBXVocY9czeCY6SXlobmd9pdhzcmiIdeqmwPflmToPm9Utz29VYPx7yqC7RTCaGetGk7LdUFdevC3PtM9Ew3Us!/b&bo=6ABjAegAYwEBFzA!&rf=viewer_4',
  'https://m.qpic.cn/psc?/V54GqyFi3LRHLj3NYbwy3c7HR82xCTpF/bqQfVz5yrrGYSXMvKr.cqeVXKfqJHZVCEOj.xrfZo6BW7uo7FMCQJn9ZaRu8MwF4CSt02eq*4Um9wMgbo1xrmyFGN4msquPuu1AJY5PkylM!/b&bo=6ABlAegAZQEBByA!&rf=viewer_4',
  'https://m.qpic.cn/psc?/V54GqyFi3LRHLj3NYbwy3c7HR82xCTpF/bqQfVz5yrrGYSXMvKr.cqTcvZLyvcEjg8uY0kpKUYDBF.bOnjXohSAGUoBCsqPkphDYDEYw985h25hCMC4BkansngbexoiMEhwe9SQWfbpg!/b&bo=6ABnAegAZwEBByA!&rf=viewer_4',
  'http://m.qpic.cn/psc?/V54GqyFi3LRHLj3NYbwy3c7HR82xCTpF/bqQfVz5yrrGYSXMvKr.cqYw0Jki.gpvf8QWtjB.URPnXf03TsqbwMibbHCYoVIakRQA15iwWnKGQWTbieUia5WMnw9O5GayFPsS9GM6Ae*8!/b&bo=6gBnAeoAZwEBFzA!&rf=viewer_4',
  'http://m.qpic.cn/psc?/V54GqyFi3LRHLj3NYbwy3c7HR82xCTpF/bqQfVz5yrrGYSXMvKr.cqYgZqKAQoI98L7kBDz*DjFwOLj3EViZ99.cUIMNPsFn6NWAsgE5LG2OZVPIpzP0gTdwCaFHY.cSFRDu352Mf1Qc!/b&bo=6QBkAekAZAEBFzA!&rf=viewer_4',
  'http://m.qpic.cn/psc?/V54GqyFi3LRHLj3NYbwy3c7HR82xCTpF/bqQfVz5yrrGYSXMvKr.cqbQt4fnPDQbPIusXzSMtI7CtxajgIxG9qGGlvwnqMAeRMVfvQtyoMWuvsumwX6rZT82jl9JBO6mTlFJDNm7XajQ!/b&bo=7gBfAe4AXwEBFzA!&rf=viewer_4',
  'http://m.qpic.cn/psc?/V54GqyFi3LRHLj3NYbwy3c7HR82xCTpF/bqQfVz5yrrGYSXMvKr.cqYkm90wF2.wYEjjmx2R96pctmOSJk8NRKAgSsMhblu5M6ytcz00RhGBOKwWPM8x1XorkSdU4Q1BQtUk7vuYImUY!/b&bo=5ABjAeQAYwEBFzA!&rf=viewer_4',
  'http://m.qpic.cn/psc?/V54GqyFi3LRHLj3NYbwy3c7HR82xCTpF/bqQfVz5yrrGYSXMvKr.cqfBXVocY9czeCY6SXlobmd9pdhzcmiIdeqmwPflmToPm9Utz29VYPx7yqC7RTCaGetGk7LdUFdevC3PtM9Ew3Us!/b&bo=6ABjAegAYwEBFzA!&rf=viewer_4',
  'https://m.qpic.cn/psc?/V54GqyFi3LRHLj3NYbwy3c7HR82xCTpF/bqQfVz5yrrGYSXMvKr.cqeVXKfqJHZVCEOj.xrfZo6BW7uo7FMCQJn9ZaRu8MwF4CSt02eq*4Um9wMgbo1xrmyFGN4msquPuu1AJY5PkylM!/b&bo=6ABlAegAZQEBByA!&rf=viewer_4',
  'https://m.qpic.cn/psc?/V54GqyFi3LRHLj3NYbwy3c7HR82xCTpF/bqQfVz5yrrGYSXMvKr.cqTcvZLyvcEjg8uY0kpKUYDBF.bOnjXohSAGUoBCsqPkphDYDEYw985h25hCMC4BkansngbexoiMEhwe9SQWfbpg!/b&bo=6ABnAegAZwEBByA!&rf=viewer_4',
  'http://m.qpic.cn/psc?/V54GqyFi3LRHLj3NYbwy3c7HR82xCTpF/bqQfVz5yrrGYSXMvKr.cqYw0Jki.gpvf8QWtjB.URPnXf03TsqbwMibbHCYoVIakRQA15iwWnKGQWTbieUia5WMnw9O5GayFPsS9GM6Ae*8!/b&bo=6gBnAeoAZwEBFzA!&rf=viewer_4',
  'http://m.qpic.cn/psc?/V54GqyFi3LRHLj3NYbwy3c7HR82xCTpF/bqQfVz5yrrGYSXMvKr.cqYgZqKAQoI98L7kBDz*DjFwOLj3EViZ99.cUIMNPsFn6NWAsgE5LG2OZVPIpzP0gTdwCaFHY.cSFRDu352Mf1Qc!/b&bo=6QBkAekAZAEBFzA!&rf=viewer_4',
  'http://m.qpic.cn/psc?/V54GqyFi3LRHLj3NYbwy3c7HR82xCTpF/bqQfVz5yrrGYSXMvKr.cqbQt4fnPDQbPIusXzSMtI7CtxajgIxG9qGGlvwnqMAeRMVfvQtyoMWuvsumwX6rZT82jl9JBO6mTlFJDNm7XajQ!/b&bo=7gBfAe4AXwEBFzA!&rf=viewer_4',
  'http://m.qpic.cn/psc?/V54GqyFi3LRHLj3NYbwy3c7HR82xCTpF/bqQfVz5yrrGYSXMvKr.cqfBXVocY9czeCY6SXlobmd9pdhzcmiIdeqmwPflmToPm9Utz29VYPx7yqC7RTCaGetGk7LdUFdevC3PtM9Ew3Us!/b&bo=6ABjAegAYwEBFzA!&rf=viewer_4'
]
var backCardImage = "https://m.qpic.cn/psc?/V54GqyFi3LRHLj3NYbwy3c7HR82xCTpF/bqQfVz5yrrGYSXMvKr.cqbKxMPwRdCoPQiY*3NJbS4oN6bAKsVBRA*YqsrbpKKc5Q8i5jAbH2nmx68ueG5KagHVyxhVYQJALWWjeEoMZLk0!/b&bo=OgHaAToB2gEBByA!&rf=viewer_4"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    cardNumber:0,
    clickNum: 0,      // 点击次数
    checked: 0,       // 已匹配牌数
    allCard: allCard,    // 全部卡牌数组
    allUrl: allUrl,   // 全部图片地址
    backImage: backCardImage, // 牌背面 图片地址
    firstX: -1,        // 点击的第一张卡牌的坐标 
    firstY: -1,
    cards: [],        // 随机挑选出来的牌   
    size: 49,        // 界面显示的牌数=size*2
    clickable: false,    // 当前是否可点击
    bgColor: '',
    selectNum: 0
  },


startGame: function () {  // 开始游戏
    var data = this.data;
    var that = this;
  
    var tmp = this.data.allCard.sort(
      function (a, b) { return Math.random() > .5 ? -1 : 1; });// 打乱牌堆
    var urls = this.data.allUrl.sort(function (a, b) { return Math.random() > .5 ? -1 : 1; });

    // 添加src,state,转成二维数组方面展示
    var cards = [];
    var ix = -1; var iy = 0;
    for (var i in tmp) {
      if (i % 7 == 0) {
        cards.push([]);
        ix++; iy = 0;
      }
      cards[ix].push({
        src: urls[i],
        num: '../images/' + tmp[i] + '.jpg',
        state: 0   // 为1时显示图片,为0时显示牌背面
      });
    }
    this.data.cards = cards;
    this.setData({
      cards: cards,
      clickNum: 0,
      checked: 0,
      firstX: -1,
      clickable: false
    });


    var that = this;
    that.turnAllBack();  // 所有的牌翻到背面
    data.clickable = true; // 可以开始翻牌
   
  },


  onTap: function (event) {
    const timeVal = wx.getStorageSync('date');
    var timeTemp = util.dateTime(new Date());
    if(timeVal && timeVal.timestamp == timeTemp && timeVal.count > 2){
      wx.showToast({
        title: '本日已达上限',
      });
      // return;
    }
    
    var that = this;
    var data = this.data;
    var ix = event.currentTarget.dataset.ix; // 获取点击对象的坐标
    var iy = event.currentTarget.dataset.iy;
    console.log('onTap ' + ix + ' ' + iy);
    if (data.cards[ix][iy].state != 0 || !data.clickable)  // 点击的不是未翻过来的牌或者现在不让点直接pass
      return;
    that.setData({ clickNum: ++data.clickNum }); //点击数加1   
    // 1. 检测是翻过来的第几张牌
    if (data.firstX == -1) {
      // 1.1 第一张修改状态为 1
      data.cards[ix][iy].state = 1;
      data.firstX = ix; data.firstY = iy;  // 记下坐标
      that.setData({ cards: data.cards });     // 通过setData让界面变化
      //选中的牌传给下个页面
      wx.setStorageSync("selectedCard", data.cards[ix][iy].src);
      wx.setStorageSync('selectedCardNum', data.cards[ix][iy].num);
      wx.navigateTo({ url: '../resultPage/resultPage' });
    } 
  }, 
  
  turnAllBack: function () {
    for (var ix in this.data.cards)
      for (var iy in this.data.cards[ix])
        this.data.cards[ix][iy].state = 0;
    this.setData({ cards: this.data.cards });
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      bgColor: wx.getStorageSync('colorId'),
      selectNum: wx.getStorageSync('numId').substring(3, 4)
    })

    wx.setNavigationBarTitle({
      title: '塔塔罗界'
    });
    this.startGame();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady")
 
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.data.cardNumber = Math.random();
    this.startGame();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  onAddToFavorites: function(res) {
    return {
      title: '塔塔罗界',
      imageUrl: 'https://m.qpic.cn/psc?/V54GqyFi3LRHLj3NYbwy3c7HR82xCTpF/bqQfVz5yrrGYSXMvKr.cqcxfPOeE94ldDdtLuChov1N5WvRODrxZkL8eVW6IHN89Qv1VZWkDNMIUX6TsDD1EDBsB1TPwdWYR9kyae0.SWOY!/b&bo=hACEAIQAhAABByA!&rf=viewer_4'
    }
  },
  onShareAppMessage: function() {
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve({
          title: '分享该小程序'
        })
      }, 2000)
    })
    return {
      title: '塔塔罗界',
      path: '/index/index',
      imageUrl: 'https://m.qpic.cn/psc?/V54GqyFi3LRHLj3NYbwy3c7HR82xCTpF/bqQfVz5yrrGYSXMvKr.cqcxfPOeE94ldDdtLuChov1N5WvRODrxZkL8eVW6IHN89Qv1VZWkDNMIUX6TsDD1EDBsB1TPwdWYR9kyae0.SWOY!/b&bo=hACEAIQAhAABByA!&rf=viewer_4',
      promise 
    }
  },
  onShareTimeline: function() {
    
  },

result: function () {
  wx.setStorageSync("cardNumber", this.data.cardNumber);
  wx.navigateTo({ url: '../resultPage/resultPage'})
  },

turn:function(elem){
  var cls = elem.className;
  //判断“photo_front”是否在cls中
  if( /photo_front /.test(cls)){   
  //判断“photo_front”是否在cls中
  cls = cls.replace(/photo_front/, 'photo_back')
}else{
  cls = cls.replace(/photo_back/, 'photo_front')
}
return elem.className = cls;
},

startMSG:function(){
  wx.showToast({
    title: '静下心来，心中默念，然后选择一张心情牌',
    icon: 'loading',
    duration: 1500
  })

}

})

