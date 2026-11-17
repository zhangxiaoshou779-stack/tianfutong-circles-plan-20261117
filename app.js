/* Proposal content only: no booking, payment or collection of personal data. */
const circles = [
  {
    id: "ip", rank: "priority", title: "IP轻体验与收藏同好", entry: "圈外入口示意：把喜欢的角色做成挂件，认识成都同好。",
    audience: "喜欢具体角色、萌物、动漫或游戏，偏好情感认同、作品与纪念物，但未参加过本地同好活动。",
    action: "围绕已授权IP做轻手作、主题合拍、同好日或展会新手场；先让人完成一件作品或一次体验。",
    potential: "角色认知能帮助圈外人理解活动，IP卡可增强连接；持续性取决于授权内容更新、场次与核心同好承接。",
    benefits: "授权联名卡、实际可兑周边、主题门店集章、作品完成任务；卡与活动各自说明费用和权益。",
    community: "同IP作品与收藏交流、系列活动、卡面更新；条件成熟后提供已确认的预售、限量商品或小型专场。",
    conditions: "先选一个具体IP，核实授权、库存、结算和主理人；将新手体验与深度收藏需求分别设计。"
  },
  {
    id: "city", rank: "priority", title: "城市漫游与摄影", entry: "圈外入口示意：手机也能参加的街巷采风，有人带你发现成都。",
    audience: "想周末出门、重新认识成都、拍照或发现小店；偏好短时、主题鲜明、能独自参加的本地体验。",
    action: "按街区和主题做短时漫步、手机摄影、沿线小店发现；说明步行强度、集合点和作品目标。",
    potential: "本地生活吸引面较宽，线路与主理人信息分散；靠新街区、新主题和作品交流推动复参与。",
    benefits: "原创城市主题卡、路线集章、观察或摄影任务，以及沿线合作商户真实可用的体验券。",
    community: "作品点评、下条路线共创、主理人小队；进阶可做已确认的小规模深度导览与特别开放体验。",
    conditions: "核实路线内容、天气备选、带队能力与连续主题供给；单次打卡热度不直接等于长期社群活跃。"
  },
  {
    id: "sport", rank: "priority", title: "新手运动搭子", entry: "圈外入口示意：想打球、没有搭子，先来一场新手体验。",
    audience: "想动起来却缺同伴、不会拼场的人；偏好水平相近、有人引导、时间固定、就近可达的场次。",
    action: "选一个项目与片区，做零基础羽毛球、匹克球或轻松健走；分水平接待，先学会并参与一局。",
    potential: "持续运动需求有机会形成固定频次，搭子关系能支持复参与；需要稳定场地、组织者与合适分组。",
    benefits: "场地体验券、入门指导或配套权益；用真实到场、阶段进步与小队任务记录参与。",
    community: "固定局、同水平搭子、进阶课和小队活动；高阶服务来自可交付的小班或稀缺场地时段。",
    conditions: "核实人数上限、指导与服务范围、场地时段和组织责任；观察第二次到场，而非只看领券和报名。"
  },
  {
    id: "show", rank: "priority", title: "本地剧场与现场演艺", entry: "圈外入口示意：第一次看音乐剧，先找到适合你的这一场。",
    audience: "对音乐剧、话剧、脱口秀或Livehouse好奇，却不知道选哪场；偏好清晰推荐、购票渠道和同行。",
    action: "按剧种或曲风提供入门导赏、首次观演同行、主题场；明确实际演出、票档与附加服务。",
    potential: "演出能提供持续目的地与票务服务机会，票根权益可联动消费；实际增长依赖可用场次和合作条件。",
    benefits: "经授权的票务渠道、适用票根福利、纪念卡或周边；现场任务围绕内容与体验设计。",
    community: "分品类交流、观后分享、下一场订阅；由主办方确认后再提供交流场、专场或限量周边。",
    conditions: "先核实票源、价格、退改与履约、名额、权益及结算；热门票与演员见面不能先行承诺。"
  },
  {
    id: "art", rank: "priority", title: "文博艺术看展", entry: "圈外入口示意：这场展览看什么？跟着导览和同好一起看。",
    audience: "想看展但不知看什么、怎么看、和谁去；偏好通俗讲解、主题线索、可交流的审美与知识体验。",
    action: "做入门导览、主题观展、展览与手作结合的小组体验；帮助零基础用户看懂并提出问题。",
    potential: "本地展览与导览信息存在发现空间，系列主题可支持复参与；会员活动提供可研究的进阶路径。",
    benefits: "馆方确认的合作权益、文化主题卡、展品观察任务、集章和适用文创福利。",
    community: "主题交流、系列看展、作品与书单；进阶可承接经确认的策展导览、会员活动或预留席位。",
    conditions: "核实导览专业性、预约和商业合作范围；区分公共免费资源与真正新增服务，避免只售卖公开信息。"
  },
  {
    id: "family", rank: "conditional", title: "亲子科普与博物探索", entry: "圈外入口示意：周末带孩子观察身边自然，有主题、有老师。",
    audience: "希望有质量地安排周末的家庭；偏好适龄、内容可信、孩子能动手参与、家长理解费用与服务。",
    action: "由稳定机构承接主题博物、自然观察或科普工作坊；明确孩子适龄、成人陪同与内容目标。",
    potential: "本地目的地和同行家庭需求明确，可发展系列主题；是否优先取决于稳定师资和组织交付。",
    benefits: "机构确认的体验券、家庭任务卡、观察记录与适用文创；按实际报名单位说明家庭权益。",
    community: "同行家庭、主题复购、进阶工作坊和小班；尊重家庭时间安排，避免群内只有促销。",
    conditions: "核实适龄、师资、服务边界、场地与活动安排；成人儿童、家庭数与参与人次分别记录。"
  },
  {
    id: "heritage", rank: "conditional", title: "国风汉服与非遗体验", entry: "圈外入口示意：第一次穿汉服逛成都，从一场节气体验开始。",
    audience: "喜欢国风、传统技艺或主题拍摄，但缺少入门指导；偏好能试穿、能创作、有文化解释的体验。",
    action: "选择节气雅集、汉服轻体验、非遗工坊或主题拍摄；第一次只完成一个清晰的小目标。",
    potential: "视觉和作品适合媒介展示，节令能形成主题更新；持续性依赖具体兴趣细分和主理人经营。",
    benefits: "实际可用的妆造、租赁或工坊券，文化主题卡、作品和线路任务；各项消费边界清晰。",
    community: "节气活动、技艺进阶、主题拍摄与文化小队；合作确认后提供少量名额工坊或特别体验。",
    conditions: "核实服装、妆造、摄影及押金等费用，明确作品交付；区分服饰、技艺和文化研究等不同兴趣。"
  },
  {
    id: "pet", rank: "conditional", title: "宠物友好生活", entry: "圈外入口示意：成都哪里能一起玩？发现宠物友好场所和同好活动。",
    audience: "想带宠物社交、拍照、找友好空间的宠主；偏好明确场地规则、便利到达与专业组织。",
    action: "从宠物友好空间的小型社交、摄影或训练体验开始，由品牌、空间及专业团队共同承接。",
    potential: "本地友好场所信息和品牌合作都有价值；空间、携宠到达与组织条件会限制招募范围。",
    benefits: "场地方及品牌确认的体验或商品权益、活动任务与纪念物；福利需适配真实参与场景。",
    community: "场所信息、固定小型活动、摄影和训练交流；进阶可做确认过的品牌新品体验及专业小班。",
    conditions: "单独核实携宠交通、场地和参与规则，不能按普通通勤可达推断；确认专业团队及后续活动供给。"
  },
  {
    id: "watch", rank: "conditional", title: "足球或电竞观赛", entry: "圈外入口示意：想一起为主队加油，先找到成都的观赛同好。",
    audience: "对本地球队、某个战队或游戏已有兴趣，尚未进入球迷或观赛群；偏好同行、氛围和清楚的参与规则。",
    action: "分别按队伍或赛事做新手观赛说明、主题活动或合规第二观赛点；有票源时承接正式场次。",
    potential: "共同赛事情绪有聚集力，赛季能提供连续话题；赛事周期、票源与合作权利影响可经营范围。",
    benefits: "经确认的购票及票根权益、授权主题卡或周边、观赛任务；按具体档期说明适用规则。",
    community: "固定观赛、赛季交流和专题活动；进阶资源必须是合作方确认的名额、核心活动或授权商品。",
    conditions: "足球与电竞分别运营，核实赛事和播放合作、票务及IP使用范围；比赛热度不能替代长期承接。"
  }
];

const escapeHTML = (value) => String(value).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const list = document.getElementById("circle-list");
list.innerHTML = circles.map((circle, i) => {
  const e = escapeHTML;
  const level = circle.rank === "priority" ? "优先验证" : "条件扩展";
  return [
    '<article class="circle-card" data-rank="' + e(circle.rank) + '" id="circle-' + e(circle.id) + '">',
    '<div class="circle-heading"><span class="circle-num">' + String(i+1).padStart(2,"0") + '</span><div class="circle-title"><h3>' + e(circle.title) + '</h3><p class="circle-entry">' + e(circle.entry) + '</p></div><span class="level-tag ' + (circle.rank === "conditional" ? "conditional" : "") + '">' + level + '</span></div>',
    '<div class="circle-body"><div><span class="cell-label">圈外客群与偏好</span><p>' + e(circle.audience) + '</p></div><div><span class="cell-label">第一场与具体动作</span><p>' + e(circle.action) + '</p></div><div><span class="cell-label">聚客与发展潜力</span><p>' + e(circle.potential) + '</p></div></div>',
    '<details><summary><span>卡券任务、圈内发展与合作条件</span><span aria-hidden="true">＋</span></summary><div class="circle-details"><div><h4>卡券与线下任务</h4><p>' + e(circle.benefits) + '</p></div><div><h4>社群复参与与核心服务</h4><p>' + e(circle.community) + '</p></div><div><h4>必须验证的合作条件</h4><p>' + e(circle.conditions) + '</p></div></div></details></article>'
  ].join("");
}).join("");

function setFilter(filter) {
  let count = 0;
  list.querySelectorAll(".circle-card").forEach(card => {
    card.hidden = filter !== "all" && card.dataset.rank !== filter;
    if (!card.hidden) count++;
  });
  document.querySelectorAll(".filter").forEach(button => {
    const active = button.dataset.filter === filter;
    button.classList.toggle("active",active);
    button.setAttribute("aria-pressed", String(active));
  });
  document.getElementById("scope-count").textContent = "显示 " + count + " 个" + (filter === "priority" ? "优先方向" : filter === "conditional" ? "条件扩展方向" : "候选方向");
}
document.querySelectorAll(".filter").forEach(button => button.addEventListener("click", () => setFilter(button.dataset.filter)));
setFilter("priority");

function revealReference(hash) {
  if (!/^#ref-\d+$/.test(hash)) return;
  const reference = document.getElementById(hash.slice(1));
  if (!reference) return;
  reference.closest("details").open = true;
  requestAnimationFrame(() => reference.scrollIntoView({block:"start"}));
}
document.querySelectorAll('a[href^="#ref-"]').forEach(link => link.addEventListener("click", () => revealReference(link.hash)));
window.addEventListener("hashchange", () => revealReference(location.hash));
revealReference(location.hash);
const backTop = document.querySelector(".back-top");
function updateBackTop() { backTop.classList.toggle("visible", window.scrollY > 500); }
window.addEventListener("scroll", updateBackTop, {passive:true});
backTop.addEventListener("click", () => { window.scrollTo({top:0}); document.querySelector(".brand").focus({preventScroll:true}); });
updateBackTop();
