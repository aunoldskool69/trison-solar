/**
 * Trisonsystem Solar Cell Landing Page
 * Core JavaScript Logic
 * Includes: Multi-language Dictionary, Interactive Appliance Calculator, Dark/Light Mode, Portfolio Filters, and Smooth Navigation.
 */

// --- 1. TRANSLATION DICTIONARY ---
const translations = {
    th: {
        brandName: "TRISON SYSTEMS",
        brandSub: "ผู้เชี่ยวชาญด้านโซล่าเซลล์ครบวงจร",
        navHome: "หน้าแรก",
        navPromo: "วิดีโอแนะนำ",
        navCalc: "คำนวณค่าไฟ",
        navPackages: "แพคเกจราคา",
        navPortfolio: "ผลงานของเรา",
        navFaq: "FAQ",
        navNews: "ข่าวสาร & ความรู้",
        navContact: "ติดต่อเรา",

        // Tax Incentive Banner
        taxBadge: "ลดหย่อนภาษี 2568–2571",
        taxTitle: "ติดโซล่าวันนี้ ลดหย่อนภาษีได้สูงสุด 200,000 บาท!",
        taxDesc: "มาตรการลดหย่อนภาษี Solar Rooftop ปี 2568–2571 ได้รับใบเลขจากกรมสรรพากรพร้อม e-Tax Invoice • เราดำเนินการให้ครบวงจร",
        taxCta: "ปรึกษาฟรี",

        // Brand Marquee
        brandsLabel: "แบรนด์วัสดุอุปกรณ์ระดับโลกที่เราเลือกใช้",

        // Why Choose Us Section
        whyEyebrow: "จุดเด่นของเรา",
        whyTitle: "ทำไมลูกค้าหลายร้อยรายเลือก Trisonsystem?",
        whySubtitle: "ทีมวิศวกรมืออาชีพ อุปกรณ์ระดับโลก และการบริการที่คุณไว้วางใจได้ตลอด 25 ปี",
        whyCard1Title: "วิศวกรผู้เชี่ยวชาญ 10+ ปี",
        whyCard1Desc: "ทุกโปรเจคควบคุมโดยวิศวกรไฟฟ้าและโยธาที่มีใบอนุญาต กว. รับรอง มีประสบการณ์ติดตั้งมากกว่า 10 ปี",
        whyCard2Title: "อุปกรณ์ Tier 1 ระดับพรีเมียม",
        whyCard2Desc: "เลือกเฉพาะแบรนด์ Huawei, AIKO, Deye, Randy ที่ผ่านการรับรองมาตรฐานสากล รับประกันประสิทธิภาพ 25 ปี",
        whyCard3Title: "ดำเนินการขออนุญาตครบวงจร",
        whyCard3Desc: "เราดูแลเอกสารยื่นขออนุญาตขนานไฟ MEA / PEA และ ERC ให้ครบถ้วน ไม่ต้องยุ่งยากเอง",
        whyCard4Title: "ดูผลผลิตผ่าน App Real-time",
        whyCard4Desc: "ติดตามการผลิตไฟฟ้า สถานะแบตเตอรี่ และสถิติการประหยัดพลังงานได้ตลอด 24 ชั่วโมง ผ่านสมาร์ทโฟน",
        whyCard5Title: "คืนทุนเร็ว 4-6 ปี",
        whyCard5Desc: "ออกแบบระบบที่เหมาะสมกับพฤติกรรมการใช้ไฟของคุณ เพื่อให้คืนทุนเร็วที่สุดและประหยัดสูงสุดตลอดอายุการใช้งาน",
        whyCard6Title: "บริการหลังการขายดูแลตลอด",
        whyCard6Desc: "รับประกันงานติดตั้ง 2 ปีเต็ม มีทีมช่างพร้อมดูแลและบำรุงรักษาระบบให้ทำงานได้เต็มประสิทธิภาพเสมอ",
        whyStat1: "บ้านที่ไว้วางใจ",
        whyStat2: "กำลังผลิตติดตั้งรวม",
        whyStat3: "รับประกันแผงโซล่า",
        whyStat4: "CO₂ ที่ลดได้รวม",

        // Equipment Showcase Section
        equipEyebrow: "มาตรฐานทุกชิ้น คัดของดีให้คุณ",
        equipTitle: "อุปกรณ์คุณภาพที่ Trisonsystem เลือกใช้",
        equipSubtitle: "ทุกชิ้นส่วนในระบบโซล่าเซลล์คัดจากแบรนด์ที่เชื่อถือได้ เพื่อความปลอดภัย ประสิทธิภาพ และความคุ้มค่าตลอดอายุการใช้งาน",
        equip1Name: "อินเวอร์เตอร์ Huawei",
        equip1Desc: "อินเวอร์เตอร์จาก Huawei รองรับการมอนิเตอร์ผ่าน App ตรวจสอบการผลิตไฟและสถานะระบบได้สะดวกตลอด 24 ชม.",
        equip2Name: "แผงโซล่าเซลล์ AIKO 670W",
        equip2Desc: "แผง N-type ประสิทธิภาพสูง รับประกัน 25 ปี ทนทานต่อทุกสภาพอากาศของประเทศไทย ผลิตไฟได้แม้แสงน้อย",
        equip3Name: "แบตเตอรี่ LFP (Randy / Huawei)",
        equip3Desc: "แบตเตอรี่ Lithium Iron Phosphate ปลอดภัย ไม่ลุกไหม้ รองรับ 6,000+ รอบการชาร์จ อายุการใช้งานยาวนาน 10+ ปี",
        equip4Name: "ตู้ควบคุม AC/DC",
        equip4Desc: "ตู้เหล็กแบบหนา จัดเก็บอุปกรณ์ไฟฟ้าอย่างเป็นระเบียบ แข็งแรง และสะดวกต่อการตรวจสอบภายหลัง",
        equip5Name: "ขั้วต่อ MC4 + สายไฟ PVDC",
        equip5Desc: "ขั้วต่อกันน้ำ UV-resistant สำหรับงานภายนอก ทนอุณหภูมิสูง เชื่อมต่อแน่นหนาปลอดภัย ไม่เกิดประกายไฟ",
        equip6Name: "รางยึดอลูมิเนียมแบบหนา",
        equip6Desc: "รางยึดแผงเกรดหนาพิเศษ ทนทานต่อน้ำหนักและแรงลม รองรับการใช้งานภายนอกได้ยาวนานกว่า 20 ปี",
        equip7Name: "ระบบกราวด์ + SPD ป้องกันฟ้าผ่า",
        equip7Desc: "ระบบสายดินมาตรฐาน พร้อม Surge Protection Device ป้องกันความเสียหายจากฟ้าผ่าและไฟกระชาก",
        equip8Name: "ซีลกันน้ำหลังคาคุณภาพสูง",
        equip8Desc: "ซีลกันน้ำรอบจุดติดตั้ง ป้องกันน้ำรั่วซึมบนหลังคา ทนแสงแดด UV ทนฝนตลอดปี ไม่แตกร้าว",

        // FAQ Section
        faqEyebrow: "คำถามที่พบบ่อย",
        faqTitle: "ข้อสงสัยเรื่องโซล่าเซลล์ที่ลูกค้าถามบ่อย",
        faqSubtitle: "เราตอบคำถามทุกข้อที่คุณอยากรู้ก่อนตัดสินใจติดตั้ง",
        faq1Q: "ติดตั้งโซล่าเซลล์ระบบบ้านราคาประมาณเท่าไหร่?",
        faq2Q: "ระยะเวลาคืนทุนกี่ปี?",
        faq3Q: "ต้องขออนุญาตอะไรบ้าง? ยุ่งยากไหม?",
        faq4Q: "ระบบ On-Grid, Hybrid และ Off-Grid ต่างกันอย่างไร?",
        faq5Q: "แผงโซล่าเซลล์มีอายุการใช้งานกี่ปี?",
        faq6Q: "ฤดูฝนหรือวันที่เมฆมาก แผงยังผลิตไฟได้ไหม?",
        faq7Q: "ต้องล้างทำความสะอาดแผงบ่อยแค่ไหน?",
        faq8Q: "หลังคาบ้านรับน้ำหนักแผงโซล่าได้ไหม?",
        faq9Q: "สามารถขายไฟที่เหลือใช้คืนให้การไฟฟ้าได้ไหม?",
        faq10Q: "หลังติดตั้งมีบริการดูแลและซ่อมบำรุงอย่างไร?",

        
        // Hero Section
        heroTitle: "เปลี่ยนแสงแดดเป็นพลังงานประหยัด",
        heroHighlight: "เพื่อบ้านและธุรกิจของคุณ",
        heroDesc: "TRISON SYSTEMS ผู้เชี่ยวชาญด้านโซล่าเซลล์ครบวงจร มาตรฐานวิศวกรรมระดับโลก ช่วยคุณลดค่าไฟได้สูงสุด 70% คืนทุนไว พร้อมบริการหลังการขายที่มั่นใจได้ด้วยทีมวิศวกรผู้เชี่ยวชาญ",
        heroBtnCalc: "คำนวณการประหยัดไฟ",
        heroBtnContact: "ปรึกษาวิศวกรฟรี",
        
        // Hero Stats
        statSavings: "ลดค่าไฟสูงสุด",
        statSavingsVal: "70%",
        statWarranty: "รับประกันประสิทธิภาพแผง",
        statWarrantyVal: "25 ปี",
        statInstall: "ทีมวิศวกรผู้เชี่ยวชาญ",
        statInstallVal: "10+ ปีประสบการณ์",
        statCo2: "ช่วยลดมลพิษ CO2",
        statCo2Val: "เป็นมิตรต่อสิ่งแวดล้อม",

        // Video Section
        videoTitle: "ทำความรู้จักกับ Trisonsystem",
        videoSubtitle: "วิดีโอแนะนำและบรรยากาศการติดตั้งระบบระดับมาตรฐานพรีเมียมของเรา",

        // Calculator Section
        calcTitle: "โปรแกรมประเมินค่าไฟฟ้าอัจฉริยะ",
        calcSubtitle: "วิเคราะห์ความประหยัดและความเหมาะสมของระบบโซล่าเซลล์สำหรับบ้านคุณ",
        calcTab1: "1. ประเมินจากบิลค่าไฟรายเดือน",
        calcTab2: "2. คำนวณจากเครื่องใช้ไฟฟ้าจริง",
        
        // Calculator Tab 1
        calcBillLabel: "ระบุยอดบิลค่าไฟฟ้าปัจจุบันของคุณ (บาท / เดือน)",
        calcBillUnit: "บาท",
        calcCalculateBtn: "คำนวณผลลัพธ์",
        
        // Calculator Tab 2
        calcApplianceTitle: "เลือกเครื่องใช้ไฟฟ้าภายในบ้าน",
        calcApplianceDesc: "ระบุจำนวนชิ้นและระยะเวลาที่เปิดใช้งานต่อวัน (โดยเฉพาะช่วงกลางวัน 9:00 - 16:00 น. เพื่อการประหยัดสูงสุด)",
        calcQty: "จำนวน",
        calcHours: "ชั่วโมง/วัน",
        calcAddBtn: "เพิ่ม",
        calcAppUnit: "เครื่อง/ดวง",
        calcHrUnit: "ชั่วโมง",
        
        // Calculator Results Panel
        calcResultTitle: "ผลวิเคราะห์ความคุ้มค่า",
        calcEstConsumption: "ปริมาณการใช้ไฟฟ้าในบ้าน",
        calcEstCost: "ค่าไฟฟ้าที่คาดการณ์ต่อเดือน",
        calcRecSystem: "ขนาดโซล่าเซลล์แนะนำ",
        calcEstSaving: "ประหยัดค่าไฟได้ประมาณ",
        calcPayback: "ระยะเวลาคืนทุนโดยประมาณ",
        calcSavingPerYear: "ประหยัดได้ต่อปี",
        calcCarbonReduction: "ลดการปล่อยก๊าซเรือนกระจก",
        calcUnitKwh: "หน่วย (kWh) / เดือน",
        calcUnitBaht: "บาท / เดือน",
        calcUnitYears: "ปี",
        calcUnitTon: "ตัน CO2 / ปี",
        calcRecButton: "ดูรายละเอียดแพคเกจนี้",
        
        // Calculator Recommended Badges
        recRandy5kw: "แนะนำ: Randy 5 kW - 1 Phase (฿262,150)",
        recDeye5kw3p: "แนะนำ: Deye 5 kW - 3 Phase (฿272,850)",
        recDeye6kwAiko: "แนะนำ: Deye 6 kW - 1 Phase (AIKO) (฿266,430)",
        recDeye6kwLogi: "แนะนำ: Deye 6 kW - 1 Phase (Logi) (฿251,450)",
        recHuawei5kw: "แนะนำ: Huawei 5 kW - 1 Phase (฿310,835)",
        recHuawei10kw: "แนะนำ: Huawei 10 kW - 3 Phase (฿300,000)",
        recHuawei15kw: "แนะนำ: Huawei 15 kW - 3 Phase (฿450,000)",
        recHuawei20kw: "แนะนำ: Huawei 20 kW - 3 Phase (฿600,000)",
        recNone: "กรุณากรอกข้อมูลเพื่อคำนวณขนาดระบบ",

        // Packages Section
        packTitle: "แพคเกจติดตั้งระบบโซล่าเซลล์พรีเมียม",
        packSubtitle: "อุปกรณ์เกรดดีที่สุด รับประกันคุณภาพสูงสุด พร้อมทีมบริการหลังการขาย 24 ชั่วโมง",
        packInverter: "อินเวอร์เตอร์",
        packPanels: "แผง Tier 1",
        packBattery: "แบตเตอรี่เก็บพลังงาน",
        packInstallWarranty: "รับประกันงานติดตั้ง",
        packInstallWarrantyVal: "2 ปี",
        packScope: "ขอบเขตงาน",
        packScopeInstallPermit: "ราคาติดตั้ง + ขออนุญาต",
        packSaving: "ประหยัดค่าไฟต่อเดือน",
        packBestFor: "เหมาะสำหรับ",
        packChooseBtn: "สนใจแพคเกจนี้",
        
        // Package Details
        packRandy5kwName: "Randy 5 kW - 1 Phase",
        packRandy5kwDesc: "ระบบไฮบริด 1 เฟส 5 kW สำรองไฟจุใจ 20 kWh สำหรับบ้านทั่วไป",
        packRandy5kwPrice: "฿262,150",
        packRandy5kwPanelsSpec: "Logi 650W * 8 แผง (5.2 kW)",
        packRandy5kwBatterySpec: "Randy300A - 20 kWh",
        packRandy5kwSavingSpec: "3,000 - 4,000 บาท / เดือน",
        packRandy5kwBestSpec: "บ้านทั่วไป ค่าไฟ 2,500-4,500 บาท/เดือน",
        
        packDeye5kw3pName: "Deye 5 kW - 3 Phase",
        packDeye5kw3pDesc: "ระบบไฮบริด 3 เฟส 5 kW อุปกรณ์แบรนด์ระดับโลก พร้อมแบตเตอรี่ Randy",
        packDeye5kw3pPrice: "฿272,850",
        packDeye5kw3pPanelsSpec: "Logi 650W * 8 แผง (5.2 kW)",
        packDeye5kw3pBatterySpec: "Randy300A - 15 kWh",
        packDeye5kw3pSavingSpec: "3,000 - 4,000 บาท / เดือน",
        packDeye5kw3pBestSpec: "บ้านไฟ 3 เฟส ขนาดกลาง ค่าไฟ 3,000-5,000 บาท/เดือน",
        
        packDeye6kwAikoName: "Deye 6 kW - 1 Phase (AIKO)",
        packDeye6kwAikoDesc: "ระบบไฮบริด 1 เฟส 6 kW แผง AIKO ประสิทธิภาพสูงพิเศษ พร้อมแบตเตอรี่ Randy",
        packDeye6kwAikoPrice: "฿266,430",
        packDeye6kwAikoPanelsSpec: "AIKO 670W * 10 แผง (6.7 kW)",
        packDeye6kwAikoBatterySpec: "Randy300A - 15 kWh",
        packDeye6kwAikoSavingSpec: "3,500 - 4,800 บาท / เดือน",
        packDeye6kwAikoBestSpec: "บ้านอยู่อาศัยที่เน้นแผงพรีเมียม ค่าไฟ 3,500-6,000 บาท/เดือน",
        
        packDeye6kwLogiName: "Deye 6 kW - 1 Phase (Logi)",
        packDeye6kwLogiDesc: "ระบบไฮบริด 1 เฟส 6 kW รุ่นคุ้มค่า แผง Logi พร้อมแบตเตอรี่ Randy",
        packDeye6kwLogiPrice: "฿251,450",
        packDeye6kwLogiPanelsSpec: "Logi 650W * 8 แผง (5.2 kW)",
        packDeye6kwLogiBatterySpec: "Randy300A - 15 kWh",
        packDeye6kwLogiSavingSpec: "3,200 - 4,200 บาท / เดือน",
        packDeye6kwLogiBestSpec: "บ้านทั่วไป เน้นระบบไฮบริดคุ้มค่าคุ้มราคา ค่าไฟ 3,000-5,500 บาท/เดือน",
        
        packHuawei5kwName: "Huawei 5 kW - 1 Phase",
        packHuawei5kwDesc: "ระบบไฮบริดพรีเมียม 1 เฟส 5 kW แบรนด์ชั้นนำ พร้อมแบตเตอรี่อัจฉริยะ LUNA",
        packHuawei5kwPrice: "฿310,835",
        packHuawei5kwPanelsSpec: "Logi 650W * 8 แผง (5.2 kW)",
        packHuawei5kwBatterySpec: "LUNA 2000-7-S1 - 7 kWh",
        packHuawei5kwSavingSpec: "3,000 - 4,000 บาท / เดือน",
        packHuawei5kwBestSpec: "บ้านเดี่ยวหรูหรา เน้นแบรนด์ระดับไฮเอนด์และแบตเตอรี่อัจฉริยะ",
        
        packHuawei10kwName: "Huawei 10 kW - 3 Phase",
        packHuawei10kwDesc: "ระบบออนกริด 3 เฟส 10 kW แผง AIKO สุดพรีเมียม ประหยัดไฟบ้านขนาดใหญ่",
        packHuawei10kwPrice: "฿300,000",
        packHuawei10kwPanelsSpec: "AIKO 670W * 20 แผง (13.4 kW)",
        packHuawei10kwBatterySpec: "ไม่มี (ระบบ On-Grid)",
        packHuawei10kwSavingSpec: "5,500 - 6,800 บาท / เดือน",
        packHuawei10kwBestSpec: "บ้านขนาดใหญ่ หรือออฟฟิศขนาดเล็ก ค่าไฟช่วงกลางวันสูง 5,000-9,000 บาท/เดือน",
        
        packHuawei15kwName: "Huawei 15 kW - 3 Phase",
        packHuawei15kwDesc: "ระบบออนกริด 3 เฟส 15 kW ประสิทธิภาพสูงสำหรับธุรกิจหรือบ้านครอบครัวใหญ่",
        packHuawei15kwPrice: "฿450,000",
        packHuawei15kwPanelsSpec: "AIKO 670W * 28 แผง (18.76 kW)",
        packHuawei15kwBatterySpec: "ไม่มี (ระบบ On-Grid)",
        packHuawei15kwSavingSpec: "8,000 - 10,000 บาท / เดือน",
        packHuawei15kwBestSpec: "โฮมออฟฟิศ, มินิมาร์ท, หรือบ้านอยู่อาศัยขนาดใหญ่มาก ค่าไฟ 8,000-14,000 บาท/เดือน",
        
        packHuawei20kwName: "Huawei 20 kW - 3 Phase",
        packHuawei20kwDesc: "ระบบออนกริด 3 เฟส 20 kW โซลูชันลดค่าไฟสูงสุดสำหรับโรงงานและองค์กรธุรกิจ",
        packHuawei20kwPrice: "฿600,000",
        packHuawei20kwPanelsSpec: "AIKO 670W * 44 แผง (29.48 kW)",
        packHuawei20kwBatterySpec: "ไม่มี (ระบบ On-Grid)",
        packHuawei20kwSavingSpec: "12,000 - 15,000+ บาท / เดือน",
        packHuawei20kwBestSpec: "สำนักงาน, โรงงานอุตสาหกรรมขนาดเล็กถึงกลาง, โกดังสินค้า ค่าไฟ 15,000+ บาท/เดือน",

        // Portfolio Section
        portTitle: "ผลงานการติดตั้งระดับพรีเมียมของเรา",
        portSubtitle: "การันตีผลงานการติดตั้งจริงด้วยมาตรฐานความปลอดภัยสูงสุด พร้อมทีมวิศวกรผู้เชี่ยวชาญ",
        filterAll: "ทั้งหมด",
        filterSinglePhase: "ระบบ 1 เฟส",
        filterThreePhase: "ระบบ 3 เฟส",
        filterBattery: "ระบบมีแบตเตอรี่ (Hybrid)",
        
        // Portfolio Projects
        portProject1: "Deye 10kW Single Phase + Battery LFP 35kWh ระบบสำรองเต็มพิกัด",
        portProject2: "Deye 10kW 1-Phase ไฮบริดความจุสูง (ตู้แบตเตอรี่และอินเวอร์เตอร์ภายนอก)",
        portProject3: "Huawei Smart System 10kW + 5kW มัลติอินเวอร์เตอร์ 3 เฟส สำหรับบ้านหลังใหญ่",
        portProject4: "ห้องควบคุมระบบอินเวอร์เตอร์คู่ Huawei Dual Inv 10+5kW ระบบตู้ไฟระดับสากล",
        portProject5: "Huawei SUN2000 10kW 3-Phase + แบตเตอรี่เก็บพลังงาน LUNA2000 21kWh",
        portProject6: "Huawei 10kW 3-Phase ระบบออนกริดประหยัดไฟบ้านเดี่ยวขนาดใหญ่",
        portProject7: "งานติดตั้งตู้คุมระบบไฟฟ้าระดับมาตรฐานสากล Huawei 10kW On-grid",
        portProject8: "Huawei Commercial 50kW 3-Phase ระบบโซล่ารูฟท็อปช่วยประหยัดไฟโรงงาน",
        portProject9: "Huawei 20kW 3-Phase โซล่าเซลล์เต็มระบบโครงสร้างมาตรฐานวิศวกรรม",
        portProject10: "ระบบตู้ควบคุมไฟสากล Huawei 10kW + 5kW เชื่อมต่อสองอาคารสมบูรณ์แบบ",
        portProject11: "Sorts Hybrid 6kW 1-Phase + แบตเตอรี่ลิเธียม 10kWh สำหรับบ้านประหยัดไฟ",
        portProject12: "Hoymiles Microinverter 12kW 3-Phase + แบตเตอรี่เก็บไฟ 12kWh สไตล์โมเดิร์น",

        // News & Knowledge Section
        newsTitle: "ข่าวสารและความรู้เรื่องโซล่าเซลล์",
        newsSubtitle: "บทความและเทคนิคดีๆ ที่ช่วยให้คุณเข้าใจการทำงานและการเลือกติดตั้งโซล่าเซลล์ที่คุ้มค่าที่สุด",
        newsCatTech: "เทคโนโลยี",
        newsCatGuide: "คำแนะนำ",
        newsCatSave: "เทคนิคประหยัดพลังงาน",
        
        procTitle: "ขั้นตอนการปฏิบัติงานของเรา",
        procSubtitle: "มาตรฐานการทำงานที่ชัดเจน โปร่งใส และตรวจสอบได้ทุกขั้นตอน",
        procStep1Title: "1. สำรวจและประเมิน",
        procStep1Desc: "วิศวกรลงพื้นที่สำรวจโครงสร้างหลังคา วัดความเข้มแสง และวิเคราะห์พฤติกรรมการใช้ไฟฟ้าของลูกค้าอย่างละเอียดเพื่อหาขนาดระบบที่คุ้มค่าที่สุด",
        procStep2Title: "2. ออกแบบและขออนุญาต",
        procStep2Desc: "ออกแบบระบบที่ปลอดภัยและมีประสิทธิภาพสูงสุด พร้อมอำนวยความสะดวกในเรื่องเอกสารและสิทธิประโยชน์ยื่นขออนุญาตขนานไฟกับการไฟฟ้าฯ (MEA/PEA)",
        procStep3Title: "3. ดำเนินการติดตั้ง",
        procStep3Desc: "ทีมช่างผู้เชี่ยวชาญลงมือติดตั้งระบบอย่างปลอดภัย ใช้อุปกรณ์มาตรฐานระดับโลก Tier 1 เก็บสายไฟได้ประณีตสวยงาม แข็งแรงทนทานตามหลักวิศวกรรม",
        procStep4Title: "4. ตรวจสอบและส่งมอบ",
        procStep4Desc: "ทดสอบประสิทธิภาพระบบอย่างเข้มงวดก่อนเชื่อมขนานไฟจริง พร้อมสอนใช้งานแอปพลิเคชันเพื่อติดตามผลผลิตพลังงานแบบ Real-time ตลอดเวลา",
        
        news1Title: "บริการยื่นขออนุญาตติดตั้งโซล่าเซลล์ภาคประชาชนกับการไฟฟ้า MEA และ PEA",
        news1Desc: "คู่มือขั้นตอนสำหรับบ้านอยู่อาศัยในการเตรียมเอกสารยื่นขนานไฟโซล่ารูฟท็อปในไทยอย่างถูกต้องตามหลักเกณฑ์การไฟฟ้า...",
        news2Title: "ส่องมาตรการกระทรวงการคลังลดหย่อนภาษีติดตั้งโซล่ารูฟท็อปสูงสุด 2 แสนบาท",
        news2Desc: "สรุปกฎเกณฑ์สิทธิประโยชน์ทางภาษีในการสนับสนุนติดตั้งโซล่าเซลล์สำหรับบุคคลธรรมดาเพื่อช่วยคนไทยประหยัดไฟระยะยาว...",
        news3Title: "Solar Hub แหล่งรวมข่าวสาร ความรู้ และรีวิวอุปกรณ์โซล่าเซลล์ฟรีที่ใหญ่ที่สุดในไทย",
        news3Desc: "พอร์ทัลรวบรวมประสบการณ์จริง รีวิวยี่ห้อแผงโซล่าเซลล์ อินเวอร์เตอร์ วิธีการดูแลรักษา และคำนวณกำลังไฟที่คุณต้องรู้ก่อนติดตั้ง...",
        newsReadMore: "อ่านบทความเต็ม",

        // Contact Section
        contactTitle: "ปรึกษาวิศวกรและประเมินราคาฟรี",
        contactSubtitle: "กรอกข้อมูลเพื่อให้ทีมวิศวกรผู้เชี่ยวชาญของ Trisonsystem ติดต่อกลับและสำรวจพื้นที่หน้างานฟรี!",
        contactName: "ชื่อ-นามสกุลของคุณ",
        contactPhone: "เบอร์โทรศัพท์ติดต่อ",
        contactEmail: "อีเมล (ถ้ามี)",
        contactLine: "Line ID (ถ้ามี)",
        contactLocation: "จังหวัด / สถานที่ติดตั้ง",
        contactPackageLabel: "แพคเกจหรือหัวข้อที่ต้องการติดต่อ",
        contactMsg: "รายละเอียดเพิ่มเติม (เช่น ยอดค่าไฟเฉลี่ย, ลักษณะบ้าน)",
        contactSubmit: "ส่งข้อมูลนัดหมาย",
        contactSuccess: "ส่งข้อมูลสำเร็จ! เจ้าหน้าที่วิศวกรของเราจะติดต่อกลับภายใน 24 ชั่วโมง",
        contactError: "เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้งหรือติดต่อทาง Line โดยตรง",
        
        // Office Info
        officeTitle: "ที่ตั้งสำนักงานและช่องทางติดต่อ",
        officeHours: "เวลาทำการ: จันทร์ - เสาร์ (08:30 น. - 17:30 น.)",
        officePhone: "สายด่วนโทร: 096-949-5602",
        officeEmail: "อีเมล: trisonstore2017@gmail.com",
        officeLine: "LINE Official: @trisonsolar",
        officeFacebook: "Facebook: TRISON SYSTEMS Solar Energy",
        officeAddress: "บริษัท ไทร์ซัน ซิสเท็มส์ จำกัด - 490/19 ถนนกาญจนาภิเษก แขวงท่าแร้ง เขตบางเขน กรุงเทพมหานคร 10220",

        // Home Appliance names
        appAir9k: "เครื่องปรับอากาศ (9,000 BTU)",
        appAir12k: "เครื่องปรับอากาศ (12,000 BTU)",
        appAir18k: "เครื่องปรับอากาศ (18,000 BTU)",
        appAir24k: "เครื่องปรับอากาศ (24,000 BTU)",
        appAir36k: "เครื่องปรับอากาศ (36,000 BTU)",
        appFridge: "ตู้เย็นสองประตู (15 cu.ft)",
        appTv: "โทรทัศน์ LED 55 นิ้ว",
        appWash: "เครื่องซักผ้า",
        appMicrowave: "เตาอบไมโครเวฟ",
        appHeater: "เครื่องทำน้ำอุ่นไฟฟ้า",
        appLed: "หลอดไฟ LED 12W",
        appFan: "พัดลมตั้งโต๊ะ 16 นิ้ว",
        appPc: "คอมพิวเตอร์ Desktop/เกมมิ่ง",
        appCooker: "หม้อหุงข้าวไฟฟ้า",

        // Trust & Standards Bar
        trustTitle1: "ขนานไฟถูกต้อง 100%",
        trustDesc1: "ดำเนินการยื่นเอกสารขออนุญาตขนานไฟกับการไฟฟ้า MEA / PEA และคณะกรรมการกำกับกิจการพลังงาน (ERC) ครบวงจรอย่างถูกต้องตามกฎหมาย",
        trustTitle2: "อุปกรณ์เกรด Premium Tier 1",
        trustDesc2: "เลือกใช้แผงโซล่าเซลล์ระดับ Bloomberg Tier 1 (AIKO, LONGi) ประสิทธิภาพสูง และอินเวอร์เตอร์มาตรฐานสากล (Huawei, Deye)",
        trustTitle3: "ควบคุมโดยวิศวกร กว. วิชาชีพ",
        trustDesc3: "ควบคุมการออกแบบ คำนวณความแข็งแรงโครงสร้างหลังคา และเซ็นรับรองแบบความปลอดภัยโดยวิศวกรไฟฟ้าและโยธาที่มีใบอนุญาต (กว.)",
        trustTitle4: "รับประกันคุณภาพบริการ",
        trustDesc4: "รับประกันงานติดตั้ง 2 ปีเต็ม พร้อมบริการหลังการขาย และแอปพลิเคชันระบบอัจฉริยะดูการประหยัดไฟแบบ Real-time 24 ชั่วโมง",

        // Admin Backoffice
        adminPortalLink: "ระบบหลังบ้านพนักงาน",
        adminLoginTitle: "เข้าสู่ระบบหลังบ้านพนักงาน",
        adminLoginDesc: "กรุณาระบุรหัสผ่านสำหรับการเข้าถึงหน้าต่างควบคุมระบบของเว็บไซต์",
        adminPasscodeLabel: "รหัสผ่าน (Passcode)",
        adminLoginBtn: "ปลดล็อกหน้าต่างควบคุม",
        adminLoginError: "รหัสผ่านไม่ถูกต้อง กรุณากรอกใหม่อีกครั้ง",
        adminExitBtn: "ออกจากระบบหลังบ้าน",
        adminTabGeneral: "ข้อมูลทั่วไปและติดต่อ",
        adminTabPackages: "จัดการแพคเกจราคา",
        adminTabPortfolio: "แกลเลอรีผลงาน",
        adminTabNews: "ข่าวสารและความรู้",
        adminTabMedia: "คลังสื่อรูปภาพ/วิดีโอ",
        adminTabSystem: "ตั้งค่าระบบและกู้คืน",
        adminCancelBtn: "ยกเลิกการแก้ไข",
        adminSaveBtn: "บันทึกข้อมูลเว็บไซต์",
        // Package Customizer
        customizerTitle: 'ปรับแต่งแพคเกจของคุณ',
        customizerStep1: 'อินเวอร์เตอร์',
        customizerStep2: 'แผงโซล่า',
        customizerStep3: 'แบตเตอรี่',
        customizerStep4: 'อุปกรณ์เพิ่มเติม',
        customizerStep5: 'สรุปแพคเกจ',
        customizerBtnPrev: 'ก่อนหน้า',
        customizerBtnNext: 'ถัดไป →',
        customizerBtnFinish: 'ดูสรุปแพคเกจ',
        customizerOrigPrice: 'ราคาแพคเกจเดิม',
        customizerNewPrice: 'ราคาที่ปรับแต่ง',
        customizerDiff: 'ส่วนต่าง',
        customizerCurrentBadge: 'อุปกรณ์เดิม',
        customizerSelectBtn: 'เลือก',
        customizerSelectedBtn: 'เลือกแล้ว ✓',
        customizerPanelQty: 'จำนวนแผง',
        customizerTotalKw: 'กำลังผลิตรวม',
        customizerPanelPrice: 'ราคาแผง/แผง',
        customizerInstallFee: 'ค่าติดตั้ง + ขออนุญาต',
        customizerSummaryTitle: 'สรุปแพคเกจที่คุณเลือก',
        customizerInverter: 'อินเวอร์เตอร์',
        customizerPanel: 'แผงโซล่า',
        customizerBattery: 'แบตเตอรี่',
        customizerCable: 'สายไฟ DC',
        customizerMounting: 'ระบบราง',
        customizerAddons: 'อุปกรณ์เสริม',
        customizerTotalPrice: 'ราคารวมทั้งหมด',
        customizerDownloadPdf: '📄 ดาวน์โหลดใบเสนอราคา PDF',
        customizerSendLine: '💬 ส่งสรุปผ่าน LINE OA',
        customizerEditBack: '← กลับไปแก้ไข',
        customizerMonthSave: 'ประหยัดต่อเดือนโดยประมาณ',
        customizerPayback: 'ระยะคืนทุนโดยประมาณ',
        customizerBtnOpen: '⚙️ ปรับแต่งแพคเกจ',
        customizerAddonTitle: 'อุปกรณ์เสริม',
        customizerCableTitle: 'สายไฟ DC Solar',
        customizerMountTitle: 'ระบบราง / โครงยึด',
        customizerNoBattery: 'ไม่มีแบตเตอรี่',
        customizerPdfTitle: 'ใบเสนอราคาระบบโซล่าเซลล์',
        customizerPdfCompany: 'TRISON SYSTEMS',
        customizerPdfDate: 'วันที่',
        customizerPdfItem: 'รายการ',
        customizerPdfSpec: 'รายละเอียด',
        customizerPdfQty: 'จำนวน',
        customizerPdfUnit: 'หน่วย',
        customizerPdfPrice: 'ราคา (บาท)',
        customizerPdfTotal: 'ราคารวม',
        customizerPdfInstall: 'ค่าติดตั้ง + ขออนุญาต',
        customizerPdfGrandTotal: 'ราคาสุทธิ',
        customizerPdfNote: 'หมายเหตุ: ราคานี้เป็นราคาประมาณการ กรุณาติดต่อทีมงานเพื่อยืนยันราคาจริง',
        customizerPdfWarranty: 'รับประกันงานติดตั้ง 2 ปี | วัสดุอุปกรณ์รับประกันตามแบรนด์'
    },
    en: {
        brandName: "TRISON SYSTEMS",
        brandSub: "World-Class Engineering Solar Solutions",
        navHome: "Home",
        navPromo: "Promo Video",
        navCalc: "Calculator",
        navPackages: "Packages",
        navPortfolio: "Portfolio",
        navNews: "Knowledge",
        navContact: "Contact Us",
        
        heroTitle: "Convert Sunlight into Instant Savings",
        heroHighlight: "For Your Home & Business",
        heroDesc: "TRISON SYSTEMS, world-class engineering standards solar complete solutions. Help you slash electricity bills by up to 70% with high-end turnkey setups and reliable long term investment ROI returns.",
        heroBtnCalc: "Calculate Your Savings",
        heroBtnContact: "Free Engineer Consultation",
        
        statSavings: "Max Bill Reduction",
        statSavingsVal: "70%",
        statWarranty: "Panel Power Warranty",
        statWarrantyVal: "25 Years",
        statInstall: "Certified Engineering",
        statInstallVal: "10+ Years Experience",
        statCo2: "CO2 Emissions Reduced",
        statCo2Val: "Eco-Friendly Future",

        videoTitle: "Get to know Trisonsystem",
        videoSubtitle: "Explore our introduction video and premium engineering setup installations.",

        calcTitle: "Smart Electricity Calculator",
        calcSubtitle: "Analyze your power consumption and estimate solar installation scale suitability.",
        calcTab1: "1. Quick Estimate via Monthly Bill",
        calcTab2: "2. Detail Estimate via Appliances",
        
        calcBillLabel: "Enter your current monthly electricity bill (THB / Month)",
        calcBillUnit: "THB",
        calcCalculateBtn: "Analyze Value",
        
        calcApplianceTitle: "Select Household Appliances",
        calcApplianceDesc: "Input the quantity and estimated active operational hours per day (especially during peak daylight 9:00 AM - 4:00 PM).",
        calcQty: "Qty",
        calcHours: "Hours/Day",
        calcAddBtn: "Add",
        calcAppUnit: "unit(s)",
        calcHrUnit: "hr(s)",
        
        calcResultTitle: "Savings & ROI Report",
        calcEstConsumption: "Total Household Consumption",
        calcEstCost: "Predicted Monthly Bill Cost",
        calcRecSystem: "Recommended Solar System Size",
        calcEstSaving: "Estimated Monthly Savings",
        calcPayback: "Estimated Return On Investment (ROI)",
        calcSavingPerYear: "Savings Per Year",
        calcCarbonReduction: "Carbon Footprint Avoided",
        calcUnitKwh: "kWh / month",
        calcUnitBaht: "THB / month",
        calcUnitYears: "Years",
        calcUnitTon: "Tons CO2 / Year",
        calcRecButton: "View Package Details",
        
        recRandy5kw: "Recommended: Randy 5 kW - 1 Phase (฿262,150)",
        recDeye5kw3p: "Recommended: Deye 5 kW - 3 Phase (฿272,850)",
        recDeye6kwAiko: "Recommended: Deye 6 kW - 1 Phase (AIKO) (฿266,430)",
        recDeye6kwLogi: "Recommended: Deye 6 kW - 1 Phase (Logi) (฿251,450)",
        recHuawei5kw: "Recommended: Huawei 5 kW - 1 Phase (฿310,835)",
        recHuawei10kw: "Recommended: Huawei 10 kW - 3 Phase (฿300,000)",
        recHuawei15kw: "Recommended: Huawei 15 kW - 3 Phase (฿450,000)",
        recHuawei20kw: "Recommended: Huawei 20 kW - 3 Phase (฿600,000)",
        recNone: "Please enter information to run recommendations.",

        packTitle: "Premium Solar System Packages",
        packSubtitle: "Highest industry grade components, extreme-life warranty, and 24/7 client care service.",
        packInverter: "Inverter",
        packPanels: "Tier 1 Panels",
        packBattery: "Storage Battery",
        packInstallWarranty: "Installation Warranty",
        packInstallWarrantyVal: "2 Years",
        packScope: "Work Scope",
        packScopeInstallPermit: "Installation + Permission",
        packSaving: "Est. Savings / Month",
        packBestFor: "Best Suitable For",
        packChooseBtn: "Select This Package",
        
        packRandy5kwName: "Randy 5 kW - 1 Phase",
        packRandy5kwDesc: "1-Phase 5 kW Hybrid system with huge 20 kWh Randy battery backup for standard homes.",
        packRandy5kwPrice: "฿262,150",
        packRandy5kwPanelsSpec: "Logi 650W * 8 Panels (5.2 kW)",
        packRandy5kwBatterySpec: "Randy300A - 20 kWh",
        packRandy5kwSavingSpec: "3,000 - 4,000 THB / Month",
        packRandy5kwBestSpec: "Standard homes, monthly bill 2,500-4,500 THB",
        
        packDeye5kw3pName: "Deye 5 kW - 3 Phase",
        packDeye5kw3pDesc: "3-Phase 5 kW Hybrid system, world-class components with Randy battery backup.",
        packDeye5kw3pPrice: "฿272,850",
        packDeye5kw3pPanelsSpec: "Logi 650W * 8 Panels (5.2 kW)",
        packDeye5kw3pBatterySpec: "Randy300A - 15 kWh",
        packDeye5kw3pSavingSpec: "3,000 - 4,000 THB / Month",
        packDeye5kw3pBestSpec: "Medium 3-phase houses, monthly bill 3,000-5,000 THB",
        
        packDeye6kwAikoName: "Deye 6 kW - 1 Phase (AIKO)",
        packDeye6kwAikoDesc: "1-Phase 6 kW Hybrid system, premium AIKO panels with Randy battery backup.",
        packDeye6kwAikoPrice: "฿266,430",
        packDeye6kwAikoPanelsSpec: "AIKO 670W * 10 Panels (6.7 kW)",
        packDeye6kwAikoBatterySpec: "Randy300A - 15 kWh",
        packDeye6kwAikoSavingSpec: "3,500 - 4,800 THB / Month",
        packDeye6kwAikoBestSpec: "Homes focused on premium panels, monthly bill 3,500-6,000 THB",
        
        packDeye6kwLogiName: "Deye 6 kW - 1 Phase (Logi)",
        packDeye6kwLogiDesc: "1-Phase 6 kW Hybrid system, cost-effective Logi panels with Randy battery.",
        packDeye6kwLogiPrice: "฿251,450",
        packDeye6kwLogiPanelsSpec: "Logi 650W * 8 Panels (5.2 kW)",
        packDeye6kwLogiBatterySpec: "Randy300A - 15 kWh",
        packDeye6kwLogiSavingSpec: "3,200 - 4,200 THB / Month",
        packDeye6kwLogiBestSpec: "Standard homes seeking great hybrid value, monthly bill 3,000-5,500 THB",
        
        packHuawei5kwName: "Huawei 5 kW - 1 Phase",
        packHuawei5kwDesc: "1-Phase 5 kW premium Hybrid system, leading brand with intelligent LUNA battery.",
        packHuawei5kwPrice: "฿310,835",
        packHuawei5kwPanelsSpec: "Logi 650W * 8 Panels (5.2 kW)",
        packHuawei5kwBatterySpec: "LUNA 2000-7-S1 - 7 kWh",
        packHuawei5kwSavingSpec: "3,000 - 4,000 THB / Month",
        packHuawei5kwBestSpec: "Luxury villas seeking high-end brand and smart battery",
        
        packHuawei10kwName: "Huawei 10 kW - 3 Phase",
        packHuawei10kwDesc: "3-Phase 10 kW On-grid system, premium AIKO panels for large scale homes.",
        packHuawei10kwPrice: "฿300,000",
        packHuawei10kwPanelsSpec: "AIKO 670W * 20 Panels (13.4 kW)",
        packHuawei10kwBatterySpec: "None (On-Grid System)",
        packHuawei10kwSavingSpec: "5,500 - 6,800 THB / Month",
        packHuawei10kwBestSpec: "Large houses or small offices, high day consumption, bill 5,000-9,000 THB",
        
        packHuawei15kwName: "Huawei 15 kW - 3 Phase",
        packHuawei15kwDesc: "3-Phase 15 kW On-grid system, high efficiency for businesses and large villas.",
        packHuawei15kwPrice: "฿450,000",
        packHuawei15kwPanelsSpec: "AIKO 670W * 28 Panels (18.76 kW)",
        packHuawei15kwBatterySpec: "None (On-Grid System)",
        packHuawei15kwSavingSpec: "8,000 - 10,000 THB / Month",
        packHuawei15kwBestSpec: "Home offices, mini-marts, or very large residences, bill 8,000-14,000 THB",
        
        packHuawei20kwName: "Huawei 20 kW - 3 Phase",
        packHuawei20kwDesc: "3-Phase 20 kW On-grid system, ultimate bill reduction solution for factories and businesses.",
        packHuawei20kwPrice: "฿600,000",
        packHuawei20kwPanelsSpec: "AIKO 670W * 44 Panels (29.48 kW)",
        packHuawei20kwBatterySpec: "None (On-Grid System)",
        packHuawei20kwSavingSpec: "12,000 - 15,000+ THB / Month",
        packHuawei20kwBestSpec: "Offices, factories, warehouses, day-operation businesses, bill 15,000+ THB",

        portTitle: "Our Premium Installations Portfolio",
        portSubtitle: "Real installation projects engineered under highest global safety compliance standards.",
        filterAll: "All Projects",
        filterSinglePhase: "Single Phase Systems",
        filterThreePhase: "Three Phase Systems",
        filterBattery: "Battery Hybrid Systems",
        
        portProject1: "Deye 10kW Single Phase + 35kWh LFP Backup Battery Cabinet (Heavy Power storage)",
        portProject2: "Deye 10kW 1-Phase Hybrid setup (External outdoor cabinets layout)",
        portProject3: "Huawei Smart System 10kW + 5kW Dual Inverter 3-Phase layout for high-end luxury villa",
        portProject4: "Sleek Dual Inverter control cabinet (Huawei 10+5kW systems, global industrial standard)",
        portProject5: "Huawei SUN2000 10kW 3-Phase + LUNA2000 21kWh Smart String Storage Unit",
        portProject6: "Huawei 10kW 3-Phase On-grid setup for residential daily energy cost optimization",
        portProject7: "Certified distribution board & inverter panel (Huawei 10kW On-grid)",
        portProject8: "Huawei Commercial 50kW 3-Phase system mounted on active factory rooftop layout",
        portProject9: "Huawei 20kW 3-Phase comprehensive structural solar framework install",
        portProject10: "Trisonsystem dual building control linkage cabinet (Huawei 10kW + 5kW smart energy grid)",
        portProject11: "Sorts Hybrid 6kW 1-Phase + 10kWh Lithium Battery storage for premium green smart home",
        portProject12: "Hoymiles Microinverter 12kW 3-Phase + 12kWh Battery compact modern design install",

        newsTitle: "Solar Knowledge & Latest Tech",
        newsSubtitle: "Insightful articles, design guidelines, and calculations to help you leverage solar energy.",
        newsCatTech: "Technology",
        newsCatGuide: "Guides",
        newsCatSave: "Energy Saving Hacks",
        
        procTitle: "Our Work Process",
        procSubtitle: "Clear, transparent, and verifiable engineering work standards at every step",
        procStep1Title: "1. Survey & Estimate",
        procStep1Desc: "Our engineers inspect roof structures, measure sunlight intensity, and analyze electrical usage to size the optimal, most cost-effective solar package.",
        procStep2Title: "2. Design & Permission",
        procStep2Desc: "We design a high-efficiency electrical schematic and fully manage the complete grid-connection regulatory paperwork with utilities (MEA/PEA).",
        procStep3Title: "3. Professional Installation",
        procStep3Desc: "Certified technicians install your Tier 1 solar array safely with structural integrity, premium conduits, and neat wire management configurations.",
        procStep4Title: "4. Inspection & Handover",
        procStep4Desc: "Rigorous system diagnostic tests are performed before final commissioning, along with full training on our real-time smart monitoring application.",
        
        news1Title: "MEA & PEA Solar Rooftop Connection Regulations for Homeowners in Thailand",
        news1Desc: "A complete walkthrough guidelines outlining local utilities network parallel connection application process and rules...",
        news2Title: "Personal Income Tax Deductions Policy for Solar Cell Setup",
        news2Desc: "In-depth insights into the Ministry of Finance clean energy tax incentives covering actual expenditures up to 200,000 THB...",
        news3Title: "Solar Hub Thailand - The Largest Free Solar Information and Gear Review Portal",
        news3Desc: "A comprehensive community repository featuring actual system reviews, maintenance tips, solar inverter brand benchmarks, and free calculation tools...",
        newsReadMore: "Read Full Article",

        contactTitle: "Free Engineer Consult & Inspection",
        contactSubtitle: "Send details about your house parameters and our senior engineering team will arrange a free on-site survey!",
        contactName: "Full Name",
        contactPhone: "Phone Number",
        contactEmail: "Email (Optional)",
        contactLine: "Line ID (Optional)",
        contactLocation: "Province / Installation Site Location",
        contactPackageLabel: "Interested Package / Inquiry Area",
        contactMsg: "Message Details (Average monthly bill, building architecture description)",
        contactSubmit: "Schedule Free Inspection",
        contactSuccess: "Information received! Our engineers will call you within 24 hours.",
        contactError: "An error occurred. Please try again or add us directly via LINE.",
        
        officeTitle: "Corporate Offices & Contacts",
        officeHours: "Office Hours: Mon - Sat (08:30 AM - 05:30 PM)",
        officePhone: "Hotline: +66 96-949-5602",
        officeEmail: "Email: trisonstore2017@gmail.com",
        officeLine: "LINE Official: @trisonsolar",
        officeFacebook: "Facebook: TRISON SYSTEMS Solar Energy",
        officeAddress: "Trison Systems Co., Ltd. - 490/19 Kanchanaphisek Rd, Tha Raeng, Bang Khen, Bangkok, Thailand 10220",

        appAir9k: "Air Conditioner (9,000 BTU)",
        appAir12k: "Air Conditioner (12,000 BTU)",
        appAir18k: "Air Conditioner (18,000 BTU)",
        appAir24k: "Air Conditioner (24,000 BTU)",
        appAir36k: "Air Conditioner (36,000 BTU)",
        appFridge: "Double Door Refrigerator (15 cu.ft)",
        appTv: "LED TV 55 inches",
        appWash: "Washing Machine",
        appMicrowave: "Microwave Oven",
        appHeater: "Electric Water Heater",
        appLed: "LED Light Bulb 12W",
        appFan: "Electric Table Fan 16\"",
        appPc: "Desktop Gaming/Office PC",
        appCooker: "Electric Rice Cooker",

        // Trust & Standards Bar
        trustTitle1: "100% Legal Grid Connection",
        trustDesc1: "We handle the complete grid parallel connection applications and approvals with local utilities (MEA/PEA) and ERC legally.",
        trustTitle2: "Premium Tier 1 Equipment",
        trustDesc2: "Only premium Bloomberg Tier 1 solar panels (AIKO, LONGi) and top world-standard inverters (Huawei, Deye) are used.",
        trustTitle3: "Certified COE Engineers",
        trustDesc3: "Designs, roof structural load calculations, and safety certifications are hand-signed by licensed civil and electrical engineers.",
        trustTitle4: "Guaranteed Workmanship",
        trustDesc4: "Fully backed by our 2-year installation warranty, expert maintenance response teams, and 24/7 real-time smart monitoring apps.",

        // Admin Backoffice
        adminPortalLink: "Staff Portal",
        adminLoginTitle: "Staff Backoffice Access",
        adminLoginDesc: "Please provide valid administrative credentials to customize website contents.",
        adminPasscodeLabel: "Passcode",
        adminLoginBtn: "Unlock Site Control",
        adminLoginError: "Incorrect passcode. Access Denied.",
        adminExitBtn: "Exit Backoffice",
        adminTabGeneral: "General & Contacts",
        adminTabPackages: "Solar Packages",
        adminTabPortfolio: "Portfolio Gallery",
        adminTabNews: "Articles & News",
        adminTabMedia: "Media & Assets Hub",
        adminTabSystem: "Reset & Restore Info",
        adminCancelBtn: "Discard",
        adminSaveBtn: "Save All Updates",
        // Package Customizer
        customizerTitle: 'Customize Your Package',
        customizerStep1: 'Inverter',
        customizerStep2: 'Solar Panels',
        customizerStep3: 'Battery',
        customizerStep4: 'Add-ons',
        customizerStep5: 'Summary',
        customizerBtnPrev: 'Previous',
        customizerBtnNext: 'Next →',
        customizerBtnFinish: 'View Summary',
        customizerOrigPrice: 'Original Price',
        customizerNewPrice: 'Custom Price',
        customizerDiff: 'Difference',
        customizerCurrentBadge: 'Current',
        customizerSelectBtn: 'Select',
        customizerSelectedBtn: 'Selected ✓',
        customizerPanelQty: 'Panel Quantity',
        customizerTotalKw: 'Total System kW',
        customizerPanelPrice: 'Price per Panel',
        customizerInstallFee: 'Installation + Permit',
        customizerSummaryTitle: 'Your Custom Package Summary',
        customizerInverter: 'Inverter',
        customizerPanel: 'Solar Panels',
        customizerBattery: 'Battery',
        customizerCable: 'DC Cable',
        customizerMounting: 'Mounting System',
        customizerAddons: 'Add-ons',
        customizerTotalPrice: 'Total Price',
        customizerDownloadPdf: '📄 Download Quotation PDF',
        customizerSendLine: '💬 Send via LINE OA',
        customizerEditBack: '← Edit',
        customizerMonthSave: 'Est. Monthly Savings',
        customizerPayback: 'Est. Payback Period',
        customizerBtnOpen: '⚙️ Customize Package',
        customizerAddonTitle: 'Add-on Equipment',
        customizerCableTitle: 'DC Solar Cable',
        customizerMountTitle: 'Mounting System',
        customizerNoBattery: 'No Battery',
        customizerPdfTitle: 'Solar System Quotation',
        customizerPdfCompany: 'TRISON SYSTEMS',
        customizerPdfDate: 'Date',
        customizerPdfItem: 'Item',
        customizerPdfSpec: 'Specification',
        customizerPdfQty: 'Qty',
        customizerPdfUnit: 'Unit',
        customizerPdfPrice: 'Price (THB)',
        customizerPdfTotal: 'Subtotal',
        customizerPdfInstall: 'Installation + Permit',
        customizerPdfGrandTotal: 'Grand Total',
        customizerPdfNote: 'Note: This is an estimated quotation. Please contact our team for final pricing.',
        customizerPdfWarranty: '2-Year Installation Warranty | Equipment warranty per brand'
    },
    zh: {
        brandName: "TRISON SYSTEMS",
        brandSub: "全球工程标准光伏专家",
        navHome: "首页",
        navPromo: "宣传视频",
        navCalc: "电费计算器",
        navPackages: "特惠套餐",
        navPortfolio: "工程案例",
        navNews: "光伏百科",
        navContact: "联系我们",
        
        heroTitle: "将金色阳光转化为即时收益",
        heroHighlight: "为您的家庭与企业赋能",
        heroDesc: "TRISON SYSTEMS 是一站式全球工程标准光伏技术服务专家。为您的家庭和企业提供高可靠性并网与混网光伏系统设计、施工服务，助您轻松降低高达 70% 的电费支出。",
        heroBtnCalc: "开始测算节电额",
        heroBtnContact: "免费工程咨询",
        
        statSavings: "最高电费降幅",
        statSavingsVal: "70%",
        statWarranty: "光伏板功率质保",
        statWarrantyVal: "25年",
        statInstall: "专业把关认证",
        statInstallVal: "10年以上行业经验",
        statCo2: "每年减少碳排放",
        statCo2Val: "绿色环保生活",

        videoTitle: "走进 Trisonsystem",
        videoSubtitle: "观看我们的品牌宣传片及国际化高标准光伏设备现场安装实景。",

        calcTitle: "智能电费测算引擎",
        calcSubtitle: "深入剖析您的家庭用电习惯，智能匹配最划算的光伏装机容量。",
        calcTab1: "1. 按月电费账单估算",
        calcTab2: "2. 按家用电器明细测算",
        
        calcBillLabel: "请输入您当前的平均每月电费账单（泰铢/月）",
        calcBillUnit: "泰铢",
        calcCalculateBtn: "生成评估报告",
        
        calcApplianceTitle: "添加家用电器",
        calcApplianceDesc: "选择电器种类并输入数量及每日使用时长（尤其是上午9:00至下午4:00的用电黄金期，以最大化利用太阳能发电）。",
        calcQty: "数量",
        calcHours: "运行小时/日",
        calcAddBtn: "添加",
        calcAppUnit: "台/盏",
        calcHrUnit: "小时",
        
        calcResultTitle: "光伏投资回报报告",
        calcEstConsumption: "家庭月均用电量",
        calcEstCost: "测算月均电费成本",
        calcRecSystem: "为您推荐的光伏容量",
        calcEstSaving: "月度电费节省估算",
        calcPayback: "预计投资回报期 (ROI)",
        calcSavingPerYear: "年均省钱额",
        calcCarbonReduction: "每年减少温室气体释放",
        calcUnitKwh: "度 (kWh) / 月",
        calcUnitBaht: "泰铢 / 月",
        calcUnitYears: "年",
        calcUnitTon: "吨二氧化碳 / 年",
        calcRecButton: "立即查看匹配套餐",
        
        recRandy5kw: "推荐方案：Randy 5 kW - 单相 (฿262,150)",
        recDeye5kw3p: "推荐方案：Deye 5 kW - 三相 (฿272,850)",
        recDeye6kwAiko: "推荐方案：Deye 6 kW - 单相 (AIKO) (฿266,430)",
        recDeye6kwLogi: "推荐方案：Deye 6 kW - 单相 (Logi) (฿251,450)",
        recHuawei5kw: "推荐方案：Huawei 5 kW - 单相 (฿310,835)",
        recHuawei10kw: "推荐方案：Huawei 10 kW - 三相 (฿300,000)",
        recHuawei15kw: "推荐方案：Huawei 15 kW - 三相 (฿450,000)",
        recHuawei20kw: "推荐方案：Huawei 20 kW - 三相 (฿600,000)",
        recNone: "请输入数据以测算最优系统尺寸",

        packTitle: "Trisonsystem 尊享光伏定制套餐",
        packSubtitle: "全部采用行业顶级 Tier 1 组件及高可靠性逆变器，提供超长质保与24小时专属售后。",
        packInverter: "逆变器",
        packPanels: "Tier 1 光伏板",
        packBattery: "储能电池",
        packInstallWarranty: "安装质保",
        packInstallWarrantyVal: "2年",
        packScope: "服务范围",
        packScopeInstallPermit: "包含安装 + 报装审批",
        packSaving: "每月预估电费节省",
        packBestFor: "最适用场景",
        packChooseBtn: "预订此套餐",
        
        packRandy5kwName: "Randy 5 kW - 1 Phase",
        packRandy5kwDesc: "单相 5 kW 储能混合系统，配备 20 kWh 超大后备电池，适合家庭全天用电。",
        packRandy5kwPrice: "฿262,150",
        packRandy5kwPanelsSpec: "Logi 650W * 8 块 (5.2 kW)",
        packRandy5kwBatterySpec: "Randy300A - 20 kWh",
        packRandy5kwSavingSpec: "3,000 - 4,000 泰铢 / 月",
        packRandy5kwBestSpec: "普通住宅，月电费 2,500-4,500 泰铢",
        
        packDeye5kw3pName: "Deye 5 kW - 3 Phase",
        packDeye5kw3pDesc: "三相 5 kW 储能混合系统，世界级逆变器配备 Randy 储能电池。",
        packDeye5kw3pPrice: "฿272,850",
        packDeye5kw3pPanelsSpec: "Logi 650W * 8 块 (5.2 kW)",
        packDeye5kw3pBatterySpec: "Randy300A - 15 kWh",
        packDeye5kw3pSavingSpec: "3,000 - 4,000 泰铢 / 月",
        packDeye5kw3pBestSpec: "中型三相电住宅，月电费 3,000-5,000 泰铢",
        
        packDeye6kwAikoName: "Deye 6 kW - 1 Phase (AIKO)",
        packDeye6kwAikoDesc: "单相 6 kW 储能混合系统，高端 AIKO 光伏板配备 Randy 储能电池。",
        packDeye6kwAikoPrice: "฿266,430",
        packDeye6kwAikoPanelsSpec: "AIKO 670W * 10 块 (6.7 kW)",
        packDeye6kwAikoBatterySpec: "Randy300A - 15 kWh",
        packDeye6kwAikoSavingSpec: "3,500 - 4,800 泰铢 / 月",
        packDeye6kwAikoBestSpec: "注重高端光伏板组件的用户，月电费 3,500-6,000 泰铢",
        
        packDeye6kwLogiName: "Deye 6 kW - 1 Phase (Logi)",
        packDeye6kwLogiDesc: "单相 6 kW 储能混合系统，高性价比 Logi 光伏板配备 Randy 储能电池。",
        packDeye6kwLogiPrice: "฿251,450",
        packDeye6kwLogiPanelsSpec: "Logi 650W * 8 块 (5.2 kW)",
        packDeye6kwLogiBatterySpec: "Randy300A - 15 kWh",
        packDeye6kwLogiSavingSpec: "3,200 - 4,200 泰铢 / 月",
        packDeye6kwLogiBestSpec: "追求混合系统高性价比的家庭，月电费 3,000-5,500 泰铢",
        
        packHuawei5kwName: "Huawei 5 kW - 1 Phase",
        packHuawei5kwDesc: "单相 5 kW 豪华储能混合系统，华为高端逆变器配备智能 LUNA 储能电池。",
        packHuawei5kwPrice: "฿310,835",
        packHuawei5kwPanelsSpec: "Logi 650W * 8 块 (5.2 kW)",
        packHuawei5kwBatterySpec: "LUNA 2000-7-S1 - 7 kWh",
        packHuawei5kwSavingSpec: "3,000 - 4,000 泰铢 / 月",
        packHuawei5kwBestSpec: "高端别墅，青睐华为大牌与智能储能系统的客户",
        
        packHuawei10kwName: "Huawei 10 kW - 3 Phase",
        packHuawei10kwDesc: "三相 10 kW 并网系统，高端 AIKO 光伏板，适合白天用电量大的大中型住宅。",
        packHuawei10kwPrice: "฿300,000",
        packHuawei10kwPanelsSpec: "AIKO 670W * 20 块 (13.4 kW)",
        packHuawei10kwBatterySpec: "无（并网系统）",
        packHuawei10kwSavingSpec: "5,500 - 6,800 泰铢 / 月",
        packHuawei10kwBestSpec: "大型住宅或小型办公室，白天用电高，月电费 5,000-9,000 泰铢",
        
        packHuawei15kwName: "Huawei 15 kW - 3 Phase",
        packHuawei15kwDesc: "三相 15 kW 并网系统，高发电力，适合商住两用大楼或大型别墅。",
        packHuawei15kwPrice: "฿450,000",
        packHuawei15kwPanelsSpec: "AIKO 670W * 28 块 (18.76 kW)",
        packHuawei15kwBatterySpec: "无（并网系统）",
        packHuawei15kwSavingSpec: "8,000 - 10,000 泰铢 / 月",
        packHuawei15kwBestSpec: "家庭办公室、便利店或超大住宅，月电费 8,000-14,000 泰铢",
        
        packHuawei20kwName: "Huawei 20 kW - 3 Phase",
        packHuawei20kwDesc: "三相 20 kW 并网系统，为中小型厂房、商铺和企业量身打造的终极省电利器。",
        packHuawei20kwPrice: "฿600,000",
        packHuawei20kwPanelsSpec: "AIKO 670W * 44 块 (29.48 kW)",
        packHuawei20kwBatterySpec: "无（并网系统）",
        packHuawei20kwSavingSpec: "12,000 - 15,000+ 泰铢 / 月",
        packHuawei20kwBestSpec: "企业办公室、工厂、中型仓库、日间商业大楼，月电费 15,000+ 泰铢",

        portTitle: "匠心工程 · 精品案例展示",
        portSubtitle: "严格遵循全球领先的安全施工标准，以卓越的工程美学助力清洁能源升级。",
        filterAll: "全部案例",
        filterSinglePhase: "单相光伏系统",
        filterThreePhase: "三相光伏系统",
        filterBattery: "带储能混合系统 (Hybrid)",
        
        portProject1: "Deye 10kW 单相逆变器 + 35kWh 巨量 LFP 电池柜（超级停电储能）",
        portProject2: "Deye 10kW 单相混合系统（高颜值户外防护控制机柜实拍）",
        portProject3: "华为 10kW + 5kW 双逆变器多能互补系统（三相，高档别墅全包方案）",
        portProject4: "精美双逆变器工业级控制箱（华为 10+5kW 系统，国际电气工程标准）",
        portProject5: "华为 SUN2000 10kW 三相 + LUNA2000 21kWh 智能高压储能机柜",
        portProject6: "华为 10kW 三相并网系统（经典中大型住宅高收益屋顶项目）",
        portProject7: "标准化交流直流配电与信号控制柜内部工艺（华为 10kW 并网）",
        portProject8: "华为 50kW 三相商业逆变器（中型企业屋顶光伏减碳利器）",
        portProject9: "华为 20kW 三相智能光伏并网大宅（多角度支架抗风阻设计）",
        portProject10: "Trisonsystem 双楼宇主控级级联配电柜（华为 10kW + 5kW 智能微网）",
        portProject11: "Sorts Hybrid 6kW 单相逆变器 + 10kWh 高品质锂电池储能一体机",
        portProject12: "Hoymiles 12kW 三相微逆变器 / 储能混合系统 + 12kWh 电池极简现代风",

        newsTitle: "光伏百科与行业资讯",
        newsSubtitle: "深度解析光伏技术前沿，提供最实用的选购与省钱指南。",
        newsCatTech: "前沿科技",
        newsCatGuide: "选购指南",
        newsCatSave: "省电妙招",
        
        procTitle: "我们的标准工作流程",
        procSubtitle: "清晰、透明且可追溯的一流光伏工程施工规范",
        procStep1Title: "1. 现场勘测与评估",
        procStep1Desc: "注册电气工程师亲临现场勘测屋顶承重、光照角度，并深入分析您的用电负荷以评估最理想的光伏装机大小。",
        procStep2Title: "2. 工程设计与申报",
        procStep2Desc: "定制高发电效率的安全系统图纸，并全权代办两大电力局（MEA/PEA）屋顶光伏余电上网并网的政府审批手续。",
        procStep3Title: "3. 标准化专业施工",
        procStep3Desc: "资深施工队伍严格按图作业，全部选用全球 Tier 1 级坚固耐用光伏板及辅料，配电箱及线路排布安全且富有工业美学。",
        procStep4Title: "4. 调试验收与交付",
        procStep4Desc: "在并网送电前进行全面的工程工程验收测试与排故，现场培训客户通过手机 APP 监控端实时读取全天发电与降碳数据。",
        
        news1Title: "泰国 MEA 与 PEA 居民屋顶光伏并网申请流程指南",
        news1Desc: "全面解读泰国两大电力局关于住宅分布式屋顶光伏系统并网许可申请的最新规范与操作步骤...",
        news2Title: "泰国财政部关于居民安装屋顶光伏设备个人所得税抵扣政策",
        news2Desc: "深入解析泰国政府为鼓励绿色清洁能源发展而推行的最高 200,000 泰铢个人所得税税前扣除利好细则...",
        news3Title: "Solar Hub Thailand - 泰国最大的免费光伏资讯及设备评测中文社区",
        news3Desc: "汇集泰国当地丰富的太阳能装机实测、日常维护技巧、逆变器组件横评以及免费的功率计算工具库...",
        newsReadMore: "阅读全文",

        contactTitle: "免费获取工程图与报价测算",
        contactSubtitle: "只需填写下表，Trisonsystem 专业注册电气工程师团队即刻联系您，并提供免费的现场勘测！",
        contactName: "您的姓名",
        contactPhone: "联系电话",
        contactEmail: "电子邮箱（选填）",
        contactLine: "Line ID （选填）",
        contactLocation: "安装地点 / 所在省份",
        contactPackageLabel: "感兴趣的套餐或咨询意向",
        contactMsg: "补充说明（例如月均电费额度、屋顶类型等）",
        contactSubmit: "预约免费上门勘测",
        contactSuccess: "信息提交成功！我们的专业工程顾问将在24小时内与您电话联系。",
        contactError: "提交失败，请重试或直接通过 LINE 官方账号与我们联系。",
        
        officeTitle: "TRISON SYSTEMS 亚洲总部",
        officeHours: "工作时间: 周一 - 周六 (08:30 AM - 05:30 PM)",
        officePhone: "服务热线: +66 96-949-5602",
        officeEmail: "官方邮箱: trisonstore2017@gmail.com",
        officeLine: "LINE 官方: @trisonsolar",
        officeFacebook: "脸书专页: TRISON SYSTEMS Solar Energy",
        officeAddress: "泰三系统有限公司 (Trison Systems Co., Ltd.) - 泰国曼谷市บางเขน区ท่าแร้ง Kanchanaphisek路 490/19号，邮编 10220",

        appAir9k: "家用冷暖空调 (9,000 BTU / 约1匹)",
        appAir12k: "家用冷暖空调 (12,000 BTU / 约1.5匹)",
        appAir18k: "家用冷暖空调 (18,000 BTU / 约2匹)",
        appAir24k: "家用冷暖空调 (24,000 BTU / 约2.5匹)",
        appAir36k: "家用/轻商冷暖空调 (36,000 BTU / 约3匹)",
        appFridge: "双门冰箱 (15 立方英尺)",
        appTv: "55英寸 LED 液晶电视",
        appWash: "滚筒/波轮洗衣机",
        appMicrowave: "高功率微波炉",
        appHeater: "即热式电热水器",
        appLed: "12瓦 LED 节能灯泡",
        appFan: "16英寸落地式电风扇",
        appPc: "台式办公/游戏电脑",
        appCooker: "家用智能电饭煲",

        // Trust & Standards Bar
        trustTitle1: "100% 合法并网审批",
        trustDesc1: "我们全权负责向泰国电力局 (MEA/PEA) 和能源监管委员会 (ERC) 申请并网许可，确保系统完全合法安全合规。",
        trustTitle2: "全球顶级 Tier 1 品牌设备",
        trustDesc2: "全部选用彭博社认证的 Tier 1 一线光伏组件 (AIKO, 隆基LONGi) 以及全球顶尖的逆变器系统 (华为Huawei, 德业Deye)。",
        trustTitle3: "执业注册工程师把关",
        trustDesc3: "系统设计、屋顶结构承重评估及安全报告均由泰国持有执业证书 (กว. COE) 的注册电气与土木结构工程师签字确认。",
        trustTitle4: "尊享工程与售后双重质保",
        trustDesc4: "提供 2 年整机安装施工质保，专业售后维修响应团队，以及 24 小时实时智能监控 App，省心无忧。",

        // Admin Backoffice
        adminPortalLink: "员工后台",
        adminLoginTitle: "员工后勤控制面板",
        adminLoginDesc: "请输入系统授权密码以更改主页所有的静态与动态数据。",
        adminPasscodeLabel: "安全钥匙密码",
        adminLoginBtn: "激活控制中心",
        adminLoginError: "密码校验错误，请查证后重试。",
        adminExitBtn: "登出控制台",
        adminTabGeneral: "公司通讯信息",
        adminTabPackages: "8套产品参数",
        adminTabPortfolio: "案例图库照片",
        adminTabNews: "百科知识文稿",
        adminTabMedia: "影音文件仓库",
        adminTabSystem: "版本清除工具",
        adminCancelBtn: "放弃修改",
        adminSaveBtn: "保存数据并上线",
        // Package Customizer
        customizerTitle: '自定义您的套餐',
        customizerStep1: '逆变器',
        customizerStep2: '太阳能板',
        customizerStep3: '电池',
        customizerStep4: '附加设备',
        customizerStep5: '套餐摘要',
        customizerBtnPrev: '上一步',
        customizerBtnNext: '下一步 →',
        customizerBtnFinish: '查看摘要',
        customizerOrigPrice: '原套餐价格',
        customizerNewPrice: '定制价格',
        customizerDiff: '差价',
        customizerCurrentBadge: '当前配置',
        customizerSelectBtn: '选择',
        customizerSelectedBtn: '已选择 ✓',
        customizerPanelQty: '面板数量',
        customizerTotalKw: '系统总功率',
        customizerPanelPrice: '每块面板价格',
        customizerInstallFee: '安装费 + 许可证',
        customizerSummaryTitle: '您的定制套餐摘要',
        customizerInverter: '逆变器',
        customizerPanel: '太阳能板',
        customizerBattery: '储能电池',
        customizerCable: 'DC电缆',
        customizerMounting: '支架系统',
        customizerAddons: '附加设备',
        customizerTotalPrice: '总价格',
        customizerDownloadPdf: '📄 下载报价单PDF',
        customizerSendLine: '💬 通过LINE OA发送',
        customizerEditBack: '← 返回编辑',
        customizerMonthSave: '预估月节省',
        customizerPayback: '预估回收期',
        customizerBtnOpen: '⚙️ 自定义套餐',
        customizerAddonTitle: '附加设备',
        customizerCableTitle: 'DC太阳能电缆',
        customizerMountTitle: '支架系统',
        customizerNoBattery: '无电池',
        customizerPdfTitle: '太阳能系统报价单',
        customizerPdfCompany: 'TRISON SYSTEMS',
        customizerPdfDate: '日期',
        customizerPdfItem: '项目',
        customizerPdfSpec: '规格',
        customizerPdfQty: '数量',
        customizerPdfUnit: '单位',
        customizerPdfPrice: '价格 (泰铢)',
        customizerPdfTotal: '小计',
        customizerPdfInstall: '安装费 + 许可证',
        customizerPdfGrandTotal: '总计',
        customizerPdfNote: '注意：此为估算报价，请联系我们团队确认最终价格。',
        customizerPdfWarranty: '2年安装质保 | 设备质保按品牌规定'
    }
};

// --- 2. APPLIANCE BASE DATA ---
// W = Watts, Qty = Default quantity, Hrs = Default active hours/day
const applianceDatabase = {
    air9k: { watts: 800, labelKey: "appAir9k" },
    air12k: { watts: 1000, labelKey: "appAir12k" },
    air18k: { watts: 1500, labelKey: "appAir18k" },
    air24k: { watts: 2000, labelKey: "appAir24k" },
    air36k: { watts: 3000, labelKey: "appAir36k" },
    fridge: { watts: 150, labelKey: "appFridge" },
    tv: { watts: 100, labelKey: "appTv" },
    wash: { watts: 500, labelKey: "appWash" },
    microwave: { watts: 1000, labelKey: "appMicrowave" },
    heater: { watts: 3500, labelKey: "appHeater" },
    led: { watts: 12, labelKey: "appLed" },
    fan: { watts: 50, labelKey: "appFan" },
    pc: { watts: 250, labelKey: "appPc" },
    cooker: { watts: 750, labelKey: "appCooker" }
};

// --- COMPONENT CATALOG: Available components for Package Customizer ---
const componentCatalog = {
    inverters: [
        { id: 'randy-5kw-1p', brand: 'Randy', model: 'Randy 5kW 1-Phase Hybrid', kw: 5, phase: 1, price: 35000, specs: '5kW / 1 Phase / Hybrid / 48V' },
        { id: 'deye-5kw-3p', brand: 'Deye', model: 'Deye 5kW 3-Phase Hybrid', kw: 5, phase: 3, price: 38000, specs: '5kW / 3 Phase / Hybrid / Low Voltage' },
        { id: 'deye-6kw-1p', brand: 'Deye', model: 'Deye 6kW 1-Phase Hybrid', kw: 6, phase: 1, price: 42000, specs: '6kW / 1 Phase / Hybrid / Low Voltage' },
        { id: 'huawei-5kw-1p', brand: 'Huawei', model: 'Huawei SUN2000 5kW 1-Phase', kw: 5, phase: 1, price: 55000, specs: '5kW / 1 Phase / Smart Hybrid / AI Boost' },
        { id: 'huawei-10kw-3p', brand: 'Huawei', model: 'Huawei SUN2000 10kW 3-Phase', kw: 10, phase: 3, price: 72000, specs: '10kW / 3 Phase / Smart Hybrid / AI Boost' },
        { id: 'huawei-15kw-3p', brand: 'Huawei', model: 'Huawei SUN2000 15kW 3-Phase', kw: 15, phase: 3, price: 95000, specs: '15kW / 3 Phase / Smart Hybrid / AI Boost' },
        { id: 'huawei-20kw-3p', brand: 'Huawei', model: 'Huawei SUN2000 20kW 3-Phase', kw: 20, phase: 3, price: 120000, specs: '20kW / 3 Phase / Smart Hybrid / AI Boost' },
    ],
    panels: [
        { id: 'logi-650w', brand: 'Logi', model: 'Logi 650W Monocrystalline', watts: 650, pricePerPanel: 4800, specs: '650W / Mono PERC / 25yr Warranty' },
        { id: 'aiko-670w', brand: 'AIKO', model: 'AIKO 670W N-type ABC', watts: 670, pricePerPanel: 6200, specs: '670W / N-type ABC / 30yr Warranty / 23.6% Eff.' },
        { id: 'ja-solar-580w', brand: 'JA Solar', model: 'JA Solar 580W Mono', watts: 580, pricePerPanel: 4200, specs: '580W / Mono PERC / 25yr Warranty' },
    ],
    batteries: [
        { id: 'none', brand: '-', model: 'ไม่ต้องการแบตเตอรี่ (On-Grid)', kwh: 0, price: 0, specs: 'ระบบ On-Grid เชื่อมต่อการไฟฟ้าเท่านั้น' },
        { id: 'randy-10kwh', brand: 'Randy', model: 'Randy300A 10kWh LFP', kwh: 10, price: 65000, specs: '10kWh / LFP / 6000+ Cycles / Safe' },
        { id: 'randy-15kwh', brand: 'Randy', model: 'Randy300A 15kWh LFP', kwh: 15, price: 89000, specs: '15kWh / LFP / 6000+ Cycles / Safe' },
        { id: 'randy-20kwh', brand: 'Randy', model: 'Randy300A 20kWh LFP', kwh: 20, price: 110000, specs: '20kWh / LFP / 6000+ Cycles / Safe' },
        { id: 'luna-7kwh', brand: 'Huawei', model: 'LUNA2000-7-S1 7kWh', kwh: 7, price: 95000, specs: '7kWh / Smart Li-ion / 10yr Warranty / App Monitor' },
        { id: 'luna-14kwh', brand: 'Huawei', model: 'LUNA2000-14-S1 14kWh', kwh: 14, price: 175000, specs: '14kWh / Smart Li-ion / 10yr Warranty / App Monitor' },
    ],
    cables: [
        { id: 'dc-4mm', model: 'DC Solar Cable 4mm²', size: '4mm²', pricePerSet: 3500, specs: 'TUV Certified / UV Resistant / Suitable ≤6kW' },
        { id: 'dc-6mm', model: 'DC Solar Cable 6mm²', size: '6mm²', pricePerSet: 4800, specs: 'TUV Certified / UV Resistant / Suitable 6-15kW' },
        { id: 'dc-10mm', model: 'DC Solar Cable 10mm²', size: '10mm²', pricePerSet: 7200, specs: 'TUV Certified / UV Resistant / Suitable ≥15kW' },
    ],
    mounting: [
        { id: 'aluminum-std', model: 'รางอลูมิเนียม Standard', material: 'Aluminium 6063-T5', pricePerSet: 8000, specs: 'ทนทาน / น้ำหนักเบา / ติดตั้งง่าย' },
        { id: 'aluminum-premium', model: 'รางอลูมิเนียม Marine Grade', material: 'Aluminium Marine Grade', pricePerSet: 12000, specs: 'กันสนิม / ทนทานพิเศษ / เหมาะพื้นที่ชายทะเล' },
        { id: 'galvanized', model: 'รางเหล็กชุบกัลวาไนซ์', material: 'Galvanized Steel', pricePerSet: 6500, specs: 'แข็งแรง / ราคาประหยัด / รับน้ำหนักสูง' },
    ],
    addons: [
        { id: 'smart-meter', name: 'Smart Meter', price: 5500, description: 'มิเตอร์อัจฉริยะติดตามการผลิต-ใช้ไฟ Real-time' },
        { id: 'spd', name: 'Surge Protection Device (SPD)', price: 3500, description: 'ป้องกันฟ้าผ่าและไฟกระชาก ยืดอายุอุปกรณ์' },
        { id: 'fire-cabinet', name: 'ตู้ไฟ AC/DC Premium', price: 12000, description: 'ตู้ไฟมาตรฐาน Arc Fault Detection พร้อมระบบดับเพลิงอัตโนมัติ' },
        { id: 'roof-seal', name: 'ชุด Roof Sealant Premium', price: 4500, description: 'วัสดุซีลหลังคากันน้ำรั่วพรีเมียม อายุการใช้งาน 20 ปี' },
        { id: 'monitoring-app', name: 'Monitoring App Setup (ฟรี)', price: 0, description: 'ตั้งค่าแอปตรวจสอบระบบ Real-time บนสมาร์ทโฟน' },
    ]
};

// Package base configs: default components + installation fee per package
let packageBaseConfig = {
    'pkg-randy-5kw': {
        inverter: 'randy-5kw-1p', panel: 'logi-650w', panelQty: 8,
        battery: 'randy-20kwh', cable: 'dc-4mm', mounting: 'aluminum-std',
        addons: ['monitoring-app'], installationFee: 45000
    },
    'pkg-deye-5kw-3p': {
        inverter: 'deye-5kw-3p', panel: 'logi-650w', panelQty: 8,
        battery: 'randy-15kwh', cable: 'dc-4mm', mounting: 'aluminum-std',
        addons: ['monitoring-app'], installationFee: 48000
    },
    'pkg-deye-6kw-aiko': {
        inverter: 'deye-6kw-1p', panel: 'aiko-670w', panelQty: 10,
        battery: 'randy-15kwh', cable: 'dc-6mm', mounting: 'aluminum-std',
        addons: ['monitoring-app'], installationFee: 50000
    },
    'pkg-deye-6kw-logi': {
        inverter: 'deye-6kw-1p', panel: 'logi-650w', panelQty: 8,
        battery: 'randy-15kwh', cable: 'dc-4mm', mounting: 'aluminum-std',
        addons: ['monitoring-app'], installationFee: 48000
    },
    'pkg-huawei-5kw': {
        inverter: 'huawei-5kw-1p', panel: 'logi-650w', panelQty: 8,
        battery: 'luna-7kwh', cable: 'dc-4mm', mounting: 'aluminum-std',
        addons: ['monitoring-app'], installationFee: 52000
    },
    'pkg-huawei-10kw': {
        inverter: 'huawei-10kw-3p', panel: 'aiko-670w', panelQty: 20,
        battery: 'none', cable: 'dc-6mm', mounting: 'aluminum-std',
        addons: ['monitoring-app'], installationFee: 58000
    },
    'pkg-huawei-15kw': {
        inverter: 'huawei-15kw-3p', panel: 'aiko-670w', panelQty: 28,
        battery: 'none', cable: 'dc-6mm', mounting: 'aluminum-premium',
        addons: ['monitoring-app'], installationFee: 75000
    },
    'pkg-huawei-20kw': {
        inverter: 'huawei-20kw-3p', panel: 'aiko-670w', panelQty: 44,
        battery: 'none', cable: 'dc-10mm', mounting: 'aluminum-premium',
        addons: ['monitoring-app'], installationFee: 95000
    }
};

// Load saved catalog from CMS if exists
(function loadSavedCatalog() {
    const savedCatalog = localStorage.getItem('trison_component_catalog');
    if (savedCatalog) {
        try { Object.assign(componentCatalog, JSON.parse(savedCatalog)); } catch(e) {}
    }
    const savedPkgConfig = localStorage.getItem('trison_package_configs');
    if (savedPkgConfig) {
        try { Object.assign(packageBaseConfig, JSON.parse(savedPkgConfig)); } catch(e) {}
    }
})();

// State Variables
let currentLang = localStorage.getItem("trison_lang") || "th";
let currentTheme = localStorage.getItem("trison_theme") || "light";

// Selected appliances list for Appliance Calculator Tab 2
// Format: { id: { quantity: X, hours: Y } }
let selectedAppliances = {
    air12k: { quantity: 1, hours: 6 },
    air18k: { quantity: 1, hours: 6 },
    fridge: { quantity: 1, hours: 24 },
    led: { quantity: 10, hours: 5 },
    tv: { quantity: 1, hours: 4 }
};

// --- 3. DOM COMPONENT CONTROLLERS ---
document.addEventListener("DOMContentLoaded", () => {
    // Initialize content management configurations
    initializeCMS();
    
    // Apply initial state
    setTheme(currentTheme);
    setLanguage(currentLang);
    
    // Wire up events
    setupEventHandlers();
    
    // Populate calculator appliance grids
    renderApplianceInputs();
    
    // Initial run for calculations
    calculateFromBill();
    calculateFromAppliances();

    // Trigger lazy animations or grid adjustments
    setupAnimations();
});

// Setup All Interactive Events
function setupEventHandlers() {
    // Theme Toggles
    const themeBtn = document.getElementById("theme-toggle-btn");
    if (themeBtn) {
        themeBtn.addEventListener("click", () => {
            const newTheme = currentTheme === "light" ? "dark" : "light";
            setTheme(newTheme);
        });
    }

    // Language Switcher Pills toggles
    const langPills = document.querySelectorAll(".lang-pill");
    langPills.forEach(pill => {
        // Set active state initially
        if (pill.getAttribute("data-lang") === currentLang) {
            pill.classList.add("active");
        } else {
            pill.classList.remove("active");
        }

        pill.addEventListener("click", () => {
            const selectedLang = pill.getAttribute("data-lang");
            setLanguage(selectedLang);
        });
    });

    // Calculator Tabs
    const tab1Btn = document.getElementById("calc-tab1-btn");
    const tab2Btn = document.getElementById("calc-tab2-btn");
    const calcPane1 = document.getElementById("calc-pane-1");
    const calcPane2 = document.getElementById("calc-pane-2");

    if (tab1Btn && tab2Btn && calcPane1 && calcPane2) {
        tab1Btn.addEventListener("click", () => {
            tab1Btn.classList.add("active");
            tab2Btn.classList.remove("active");
            calcPane1.classList.add("active");
            calcPane2.classList.remove("active");
            calculateFromBill();
        });

        tab2Btn.addEventListener("click", () => {
            tab2Btn.classList.add("active");
            tab1Btn.classList.remove("active");
            calcPane2.classList.add("active");
            calcPane1.classList.remove("active");
            calculateFromAppliances();
        });
    }

    // Quick Bill Input Calculate
    const billInput = document.getElementById("calc-bill-input");
    const billBtn = document.getElementById("calc-bill-btn");
    if (billInput) {
        // Calculate dynamic response on typing
        billInput.addEventListener("input", calculateFromBill);
    }
    if (billBtn) {
        billBtn.addEventListener("click", (e) => {
            e.preventDefault();
            calculateFromBill();
            scrollToElement("calculator-results-box");
        });
    }

    // Portfolio Filters
    const filterBtns = document.querySelectorAll(".filter-btn");
    const portItems = document.querySelectorAll(".portfolio-item");

    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            // Remove active class
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const filterValue = btn.getAttribute("data-filter");
            
            portItems.forEach(item => {
                const categories = item.getAttribute("data-category").split(" ");
                if (filterValue === "all" || categories.includes(filterValue)) {
                    item.style.display = "block";
                    setTimeout(() => {
                        item.style.opacity = "1";
                        item.style.transform = "scale(1)";
                    }, 50);
                } else {
                    item.style.opacity = "0";
                    item.style.transform = "scale(0.85)";
                    setTimeout(() => {
                        item.style.display = "none";
                    }, 300);
                }
            });
        });
    });

    // Contact Form Booking Linkage
    const contactForm = document.getElementById("consult-form");
    const contactSuccessDiv = document.getElementById("contact-success-msg");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            // Perform fake validation and saving animation
            const submitBtn = contactForm.querySelector("button[type='submit']");
            const originalText = submitBtn.innerHTML;
            
            submitBtn.disabled = true;
            submitBtn.innerHTML = `<span class="loading-spinner"></span> Sending...`;

            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
                
                // Show success
                if (contactSuccessDiv) {
                    contactSuccessDiv.classList.add("show");
                    contactSuccessDiv.innerHTML = translations[currentLang].contactSuccess;
                    contactForm.reset();
                    
                    setTimeout(() => {
                        contactSuccessDiv.classList.remove("show");
                    }, 6000);
                }
            }, 1200);
        });
    }

    // Recommended package click scroll
    const recPkgBtn = document.getElementById("recommended-package-view-btn");
    if (recPkgBtn) {
        recPkgBtn.addEventListener("click", () => {
            const recommendedPkg = recPkgBtn.getAttribute("data-target-package");
            scrollToElement("packages");
            
            // Highlight target package card
            if (recommendedPkg) {
                const pkgCard = document.getElementById(recommendedPkg);
                if (pkgCard) {
                    pkgCard.classList.add("pulse-highlight");
                    setTimeout(() => {
                        pkgCard.classList.remove("pulse-highlight");
                    }, 3000);
                }
            }
        });
    }
}

// Scroll Utility
function scrollToElement(id) {
    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
}

// --- 4. LANGUAGE SWITCHING ENGINE ---
function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem("trison_lang", lang);

    // 1. Update text fields with [data-translate]
    const elementsToTranslate = document.querySelectorAll("[data-translate]");
    elementsToTranslate.forEach(el => {
        const key = el.getAttribute("data-translate");
        if (translations[lang][key]) {
            // Check if element is a form input placeholder
            if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
                el.placeholder = translations[lang][key];
            } else {
                el.innerHTML = translations[lang][key];
            }
        }
    });

    // 2. Refresh dynamic fields
    renderApplianceInputs();
    
    // Refresh calculations based on current active tab
    const tab1Btn = document.getElementById("calc-tab1-btn");
    if (tab1Btn && tab1Btn.classList.contains("active")) {
        calculateFromBill();
    } else {
        calculateFromAppliances();
    }

    // 3. Update Language switcher pills active class
    const langPills = document.querySelectorAll(".lang-pill");
    langPills.forEach(pill => {
        if (pill.getAttribute("data-lang") === lang) {
            pill.classList.add("active");
        } else {
            pill.classList.remove("active");
        }
    });

    // Update document language attribute
    document.documentElement.setAttribute("lang", lang);
}

// --- 5. THEME SWITCHING ENGINE ---
function setTheme(theme) {
    currentTheme = theme;
    localStorage.setItem("trison_theme", theme);
    document.documentElement.setAttribute("data-theme", theme);

    // Update Toggle Button Visuals
    const icon = document.querySelector("#theme-toggle-btn i");
    if (icon) {
        if (theme === "dark") {
            icon.className = "fas fa-sun"; // Show sun icon in dark mode
        } else {
            icon.className = "fas fa-moon"; // Show moon icon in light mode
        }
    }
}

// --- 5.5 SOLAR CELL OVERLOAD RAVE MODE ENGINE (SYNTHESIZED 8-BIT Retro Arcade + BEAT-SYNC STROBE) ---
let solarRaveInterval = null;
let audioCtx = null;
let currentSynthStep = 0;

window.toggleSolarRave = function() {
    const btn = document.getElementById("solar-rave-btn");
    if (!btn) return;
    const icon = btn.querySelector("i");

    if (solarRaveInterval) {
        // Stop the rave!
        clearInterval(solarRaveInterval);
        solarRaveInterval = null;
        btn.classList.remove("active");
        if (icon) icon.className = "fas fa-solar-panel";
        
        // Restore standard theme
        setTheme(localStorage.getItem("trison_theme") || "light");
    } else {
        // Start the rave!
        btn.classList.add("active");
        if (icon) icon.className = "fas fa-bolt";
        
        // Initialize Audio Context (Safe Gating for Gaining User Autoplay Permission)
        if (!audioCtx) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        
        const bpm = 130; // Fun arcade tempo!
        const stepDuration = 60 / bpm / 2; // Eighth notes (8 steps per loop bar @ 130 BPM = 230.76ms)
        currentSynthStep = 0;
        
        // Strobe + Sound Loop
        solarRaveInterval = setInterval(() => {
            const time = audioCtx.currentTime;
            
            // Retro 8-Bit Chiptune 8-Step Melodic Pattern:
            // 0: Kick + Coin sound (Level Start!) + C3 Bass
            // 1: E3 Bass
            // 2: Snare + Rapid Chiptune Arpeggio (C5 chord) + G3 Bass
            // 3: E3 Bass
            // 4: Kick + Coin sound + F3 Bass
            // 5: A3 Bass
            // 6: Snare + Rapid Chiptune Arpeggio (F5 chord) + C4 Bass
            // 7: G3 Bass (Cycle Reset!)
            
            const isKick = currentSynthStep === 0 || currentSynthStep === 4;
            const isSnare = currentSynthStep === 2 || currentSynthStep === 6;
            
            // 1. Trigger Retro Chiptune Drum Sounds
            if (isKick) {
                play8BitKick(time);
                play8BitCoin(time); // Iconic coin ping on beat 1 and 5!
                flashScreenInstant("dark"); // Flash dark on arcade kick
            } else if (isSnare) {
                play8BitSnare(time);
                flashScreenInstant("light"); // Flash light on NES snare
            } else {
                // Rhythmic intermediate strobe flashes
                if (currentSynthStep % 2 === 0) {
                    flashScreenInstant();
                }
            }

            // 2. Trigger Walking Retro Triangle Bass
            let bassFreq = 130.81; // C3
            if (currentSynthStep === 1 || currentSynthStep === 3) bassFreq = 164.81; // E3
            else if (currentSynthStep === 2) bassFreq = 196.00; // G3
            else if (currentSynthStep === 4) bassFreq = 174.61; // F3
            else if (currentSynthStep === 5) bassFreq = 220.00; // A3
            else if (currentSynthStep === 6) bassFreq = 261.63; // C4
            else if (currentSynthStep === 7) bassFreq = 196.00; // G3
            
            play8BitBass(time, stepDuration, bassFreq);

            // 3. Trigger Rapid Chord Arpeggiators (Signature Retro Sound!)
            if (currentSynthStep === 2) {
                play8BitArp(time, stepDuration, 523.25); // C5 chord arp
            } else if (currentSynthStep === 6) {
                play8BitArp(time, stepDuration, 698.46); // F5 chord arp
            }

            currentSynthStep = (currentSynthStep + 1) % 8;
        }, stepDuration * 1000);
    }
};

function flashScreenInstant(specificTheme) {
    const nextTheme = specificTheme || (currentTheme === "light" ? "dark" : "light");
    currentTheme = nextTheme;
    document.documentElement.setAttribute("data-theme", nextTheme);
    const navbarIcon = document.querySelector("#theme-toggle-btn i");
    if (navbarIcon) {
        navbarIcon.className = nextTheme === "dark" ? "fas fa-sun" : "fas fa-moon";
    }
}

// Web Audio: Retro 8-Bit Triangle Bass Kick
function play8BitKick(time) {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'triangle';
    
    osc.frequency.setValueAtTime(150, time);
    osc.frequency.linearRampToValueAtTime(40, time + 0.1);
    
    gain.gain.setValueAtTime(0.7, time);
    gain.gain.exponentialRampToValueAtTime(0.01, time + 0.1);
    
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    
    osc.start(time);
    osc.stop(time + 0.11);
}

// Web Audio: NES Noise Channel Snare
function play8BitSnare(time) {
    const bufferSize = audioCtx.sampleRate * 0.1; // Retro short snare (0.1s)
    const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
    }
    
    const noise = audioCtx.createBufferSource();
    noise.buffer = buffer;
    
    const filter = audioCtx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 850; // NES noise bandpass
    filter.Q.value = 3.2;
    
    const gain = audioCtx.createGain();
    gain.gain.setValueAtTime(0.4, time);
    gain.gain.exponentialRampToValueAtTime(0.01, time + 0.1);
    
    noise.connect(filter);
    filter.connect(gain);
    gain.connect(audioCtx.destination);
    
    noise.start(time);
    noise.stop(time + 0.11);
}

// Web Audio: Classic Chiptune Coin Ping (Square wave arpeggio)
function play8BitCoin(time) {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'square';
    
    // Coin chime: two rapid, crispy notes (B5 to E6)
    osc.frequency.setValueAtTime(987.77, time); // B5
    osc.frequency.setValueAtTime(1318.51, time + 0.07); // E6
    
    gain.gain.setValueAtTime(0.2, time);
    gain.gain.setValueAtTime(0.2, time + 0.07);
    gain.gain.exponentialRampToValueAtTime(0.01, time + 0.22);
    
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    
    osc.start(time);
    osc.stop(time + 0.23);
}

// Web Audio: Walking Retro Triangle Bass
function play8BitBass(time, duration, freq) {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'triangle'; // triangle wave gives a perfect deep retro GameBoy bass feel
    osc.frequency.value = freq;
    
    gain.gain.setValueAtTime(0.4, time);
    gain.gain.exponentialRampToValueAtTime(0.01, time + duration - 0.01);
    
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    
    osc.start(time);
    osc.stop(time + duration);
}

// Web Audio: NES Signature Rapid Arpeggiated Chord (Cycles notes extremely fast to fake polyphony)
function play8BitArp(time, duration, baseFreq) {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'square';
    
    // Arpeggiate chord notes (Root, 3rd, 5th, Octave) over 230ms duration
    const f1 = baseFreq; // Root
    const f2 = baseFreq * 1.25; // Major 3rd
    const f3 = baseFreq * 1.5; // 5th
    const f4 = baseFreq * 2.0; // Octave
    
    const noteStep = duration / 4;
    osc.frequency.setValueAtTime(f1, time);
    osc.frequency.setValueAtTime(f2, time + noteStep);
    osc.frequency.setValueAtTime(f3, time + noteStep * 2);
    osc.frequency.setValueAtTime(f4, time + noteStep * 3);
    
    gain.gain.setValueAtTime(0.15, time);
    gain.gain.exponentialRampToValueAtTime(0.01, time + duration);
    
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    
    osc.start(time);
    osc.stop(time + duration);
}





// --- 6. APPLIANCE GRID RENDERER ---
function renderApplianceInputs() {
    const applianceGrid = document.getElementById("appliances-selection-grid");
    if (!applianceGrid) return;

    applianceGrid.innerHTML = "";

    // Iterate through database
    Object.keys(applianceDatabase).forEach(key => {
        const item = applianceDatabase[key];
        const isSelected = selectedAppliances[key] !== undefined;
        const currentQty = isSelected ? selectedAppliances[key].quantity : 0;
        const currentHrs = isSelected ? selectedAppliances[key].hours : 4;
        
        const label = translations[currentLang][item.labelKey] || key;

        const card = document.createElement("div");
        card.className = `appliance-card ${isSelected ? "selected" : ""}`;
        card.setAttribute("data-appliance-id", key);

        card.innerHTML = `
            <div class="appliance-info">
                <span class="appliance-icon"><i class="${getApplianceIcon(key)}"></i></span>
                <div class="appliance-details">
                    <span class="appliance-name">${label}</span>
                    <span class="appliance-watt text-muted">${item.watts} Watts</span>
                </div>
            </div>
            <div class="appliance-controls">
                <div class="control-row">
                    <label data-translate="calcQty">${translations[currentLang].calcQty}</label>
                    <div class="quantity-counter">
                        <button type="button" class="qty-btn minus-btn" onclick="adjustQty('${key}', -1)">-</button>
                        <span class="qty-val">${currentQty}</span>
                        <button type="button" class="qty-btn plus-btn" onclick="adjustQty('${key}', 1)">+</button>
                    </div>
                </div>
                <div class="control-row hours-slider-row" style="${isSelected ? "" : "display: none;"}">
                    <div class="slider-header">
                        <span data-translate="calcHours">${translations[currentLang].calcHours}</span>
                        <span class="hours-val">${currentHrs} ${translations[currentLang].calcHrUnit}</span>
                    </div>
                    <input type="range" min="1" max="24" value="${currentHrs}" class="hours-slider" 
                           oninput="adjustHours('${key}', this.value)">
                </div>
            </div>
        `;
        applianceGrid.appendChild(card);
    });
}

// Icon mapper for appliances
function getApplianceIcon(key) {
    if (key.startsWith("air")) return "fas fa-wind";
    const icons = {
        fridge: "fas fa-snowflake",
        tv: "fas fa-tv",
        wash: "fas fa-soap",
        microwave: "fas fa-cookie-bite",
        heater: "fas fa-tint",
        led: "fas fa-lightbulb",
        fan: "fas fa-fan",
        pc: "fas fa-laptop",
        cooker: "fas fa-utensils"
    };
    return icons[key] || "fas fa-plug";
}

// Adjust quantity
window.adjustQty = function(key, delta) {
    if (!selectedAppliances[key]) {
        // If not selected yet, add with initial qty
        if (delta > 0) {
            selectedAppliances[key] = { quantity: delta, hours: 4 };
        }
    } else {
        selectedAppliances[key].quantity += delta;
        if (selectedAppliances[key].quantity <= 0) {
            delete selectedAppliances[key];
        }
    }

    renderApplianceInputs();
    calculateFromAppliances();
};

// Adjust hours
window.adjustHours = function(key, val) {
    if (selectedAppliances[key]) {
        selectedAppliances[key].hours = parseInt(val);
        const card = document.querySelector(`.appliance-card[data-appliance-id='${key}']`);
        if (card) {
            const hrValDisplay = card.querySelector(".hours-val");
            if (hrValDisplay) {
                hrValDisplay.innerHTML = `${val} ${translations[currentLang].calcHrUnit}`;
            }
        }
        calculateFromAppliances();
    }
};

// --- 7. POWER CALCULATOR ENGINES ---
const FLAT_RATE_BAHT = 4.5; // THB per unit (kWh) - Standard Thailand average electrical unit tariff

// 7.1 TAB 1: Calculate from Bill Slider/Input
function calculateFromBill() {
    const billInput = document.getElementById("calc-bill-input");
    if (!billInput) return;

    let monthlyBill = parseFloat(billInput.value);
    if (isNaN(monthlyBill) || monthlyBill <= 0) {
        renderNullResults();
        return;
    }

    // Units (kWh) = Bill / 4.5
    let monthlyUnits = monthlyBill / FLAT_RATE_BAHT;
    
    // Assume daytime usage is 60% of total consumption (highly recommended for solar design)
    let daytimeUnits = monthlyUnits * 0.60;
    
    // System Size needed = Daytime units per day / (4.2 hours of effective peak sun per day)
    let dailyDaytimeUnits = daytimeUnits / 30;
    let recommendedSystemKw = dailyDaytimeUnits / 4.2;

    // Constrain size realistically between 3kW and 50kW
    if (recommendedSystemKw < 3) recommendedSystemKw = 3;
    
    // Calculate values
    let estSavingsMonthly = monthlyBill * 0.65; // Solar cuts average 65% of bill
    let paybackYears = 0;
    let systemCost = 0;
    let systemTextKey = "";
    let systemId = "";

    // Match packages details
    if (recommendedSystemKw <= 5.2) {
        systemTextKey = "recDeye6kwLogi";
        systemId = "pkg-deye-6kw-logi";
        systemCost = 251450;
        estSavingsMonthly = 3700; 
    } else if (recommendedSystemKw <= 6.7) {
        systemTextKey = "recDeye6kwAiko";
        systemId = "pkg-deye-6kw-aiko";
        systemCost = 266430;
        estSavingsMonthly = 4150;
    } else if (recommendedSystemKw <= 13.4) {
        systemTextKey = "recHuawei10kw";
        systemId = "pkg-huawei-10kw";
        systemCost = 300000;
        estSavingsMonthly = 6150;
    } else if (recommendedSystemKw <= 18.76) {
        systemTextKey = "recHuawei15kw";
        systemId = "pkg-huawei-15kw";
        systemCost = 450000;
        estSavingsMonthly = 9000;
    } else {
        systemTextKey = "recHuawei20kw";
        systemId = "pkg-huawei-20kw";
        systemCost = 600000;
        estSavingsMonthly = 13500;
    }

    paybackYears = systemCost / (estSavingsMonthly * 12);
    updateResultsDashboard(monthlyUnits, monthlyBill, recommendedSystemKw, estSavingsMonthly, paybackYears, systemTextKey, systemId);
}

// 7.2 TAB 2: Calculate from Appliances List
function calculateFromAppliances() {
    let totalKwhPerMonth = 0;

    Object.keys(selectedAppliances).forEach(key => {
        const dbItem = applianceDatabase[key];
        const selectedItem = selectedAppliances[key];
        if (dbItem && selectedItem) {
            // Daily Wh = Watts * Qty * Hours
            let dailyWh = dbItem.watts * selectedItem.quantity * selectedItem.hours;
            let monthlyKwh = (dailyWh / 1000) * 30;
            totalKwhPerMonth += monthlyKwh;
        }
    });

    if (totalKwhPerMonth === 0) {
        renderNullResults();
        return;
    }

    let estimatedMonthlyCost = totalKwhPerMonth * FLAT_RATE_BAHT;
    
    // Design sizing for solar based on calculated load
    // Assuming daytime share is 60%
    let dailyDaytimeKwh = (totalKwhPerMonth * 0.60) / 30;
    let recommendedKw = dailyDaytimeKwh / 4.2;

    let estSavingsMonthly = estimatedMonthlyCost * 0.65;
    let systemCost = 0;
    let systemTextKey = "";
    let systemId = "";

    if (recommendedKw <= 5.2) {
        systemTextKey = "recDeye6kwLogi";
        systemId = "pkg-deye-6kw-logi";
        systemCost = 251450;
        estSavingsMonthly = Math.min(estimatedMonthlyCost * 0.70, 3700);
    } else if (recommendedKw <= 6.7) {
        systemTextKey = "recDeye6kwAiko";
        systemId = "pkg-deye-6kw-aiko";
        systemCost = 266430;
        estSavingsMonthly = Math.min(estimatedMonthlyCost * 0.75, 4150);
    } else if (recommendedKw <= 13.4) {
        systemTextKey = "recHuawei10kw";
        systemId = "pkg-huawei-10kw";
        systemCost = 300000;
        estSavingsMonthly = Math.min(estimatedMonthlyCost * 0.65, 6150);
    } else if (recommendedKw <= 18.76) {
        systemTextKey = "recHuawei15kw";
        systemId = "pkg-huawei-15kw";
        systemCost = 450000;
        estSavingsMonthly = Math.min(estimatedMonthlyCost * 0.65, 9000);
    } else {
        systemTextKey = "recHuawei20kw";
        systemId = "pkg-huawei-20kw";
        systemCost = 600000;
        estSavingsMonthly = Math.min(estimatedMonthlyCost * 0.65, 13500);
    }

    let paybackYears = systemCost / (estSavingsMonthly * 12);
    updateResultsDashboard(totalKwhPerMonth, estimatedMonthlyCost, recommendedKw, estSavingsMonthly, paybackYears, systemTextKey, systemId);
}

// 7.3 Update Results Display Elements
function updateResultsDashboard(totalKwh, totalCost, targetKw, savings, payback, recommendationKey, packageId) {
    const kwhEl = document.getElementById("res-consumption");
    const costEl = document.getElementById("res-cost");
    const sizeEl = document.getElementById("res-system-size");
    const savingsEl = document.getElementById("res-saving");
    const yearlySavingsEl = document.getElementById("res-saving-year");
    const paybackEl = document.getElementById("res-payback");
    const carbonEl = document.getElementById("res-carbon");
    const recBadge = document.getElementById("res-recommendation-badge");
    const recBtn = document.getElementById("recommended-package-view-btn");

    // Format calculations
    const formattedKwh = Math.round(totalKwh).toLocaleString();
    const formattedCost = Math.round(totalCost).toLocaleString();
    const formattedKw = targetKw.toFixed(1);
    const formattedSavings = Math.round(savings).toLocaleString();
    const formattedYearlySavings = Math.round(savings * 12).toLocaleString();
    const formattedPayback = payback.toFixed(1);
    
    // Carbon avoidance formula: 1 kWh solar saves ~0.50 kg CO2.
    // Carbon Tons/Year = (Savings Monthly kWh * 12) * 0.5 / 1000
    const solarGenKwhYear = (totalKwh * 0.65) * 12; // assumption solar covers 65% units
    const carbonReducedTons = (solarGenKwhYear * 0.50) / 1000;
    const formattedCarbon = carbonReducedTons.toFixed(2);

    if (kwhEl) kwhEl.innerHTML = `${formattedKwh} <span class="calc-unit" data-translate="calcUnitKwh">${translations[currentLang].calcUnitKwh}</span>`;
    if (costEl) costEl.innerHTML = `${formattedCost} <span class="calc-unit" data-translate="calcUnitBaht">${translations[currentLang].calcUnitBaht}</span>`;
    if (sizeEl) sizeEl.innerHTML = `${formattedKw} kW`;
    if (savingsEl) savingsEl.innerHTML = `${formattedSavings} <span class="calc-unit" data-translate="calcUnitBaht">${translations[currentLang].calcUnitBaht}</span>`;
    if (yearlySavingsEl) yearlySavingsEl.innerHTML = `${formattedYearlySavings} <span class="calc-unit" data-translate="calcUnitBaht">${translations[currentLang].calcUnitBaht}</span>`;
    if (paybackEl) paybackEl.innerHTML = `${formattedPayback} <span class="calc-unit" data-translate="calcUnitYears">${translations[currentLang].calcUnitYears}</span>`;
    if (carbonEl) carbonEl.innerHTML = `${formattedCarbon} <span class="calc-unit" data-translate="calcUnitTon">${translations[currentLang].calcUnitTon}</span>`;

    if (recBadge) {
        recBadge.innerHTML = translations[currentLang][recommendationKey] || "Recommended System Sized";
        recBadge.className = `recommendation-badge badge-${packageId}`;
    }

    if (recBtn) {
        recBtn.setAttribute("data-target-package", packageId);
        recBtn.style.display = "block";
    }
}

// Reset view on empty input
function renderNullResults() {
    const kwhEl = document.getElementById("res-consumption");
    const costEl = document.getElementById("res-cost");
    const sizeEl = document.getElementById("res-system-size");
    const savingsEl = document.getElementById("res-saving");
    const yearlySavingsEl = document.getElementById("res-saving-year");
    const paybackEl = document.getElementById("res-payback");
    const carbonEl = document.getElementById("res-carbon");
    const recBadge = document.getElementById("res-recommendation-badge");
    const recBtn = document.getElementById("recommended-package-view-btn");

    if (kwhEl) kwhEl.innerHTML = `-`;
    if (costEl) costEl.innerHTML = `-`;
    if (sizeEl) sizeEl.innerHTML = `-`;
    if (savingsEl) savingsEl.innerHTML = `-`;
    if (yearlySavingsEl) yearlySavingsEl.innerHTML = `-`;
    if (paybackEl) paybackEl.innerHTML = `-`;
    if (carbonEl) carbonEl.innerHTML = `-`;

    if (recBadge) {
        recBadge.innerHTML = translations[currentLang].recNone;
        recBadge.className = "recommendation-badge badge-none";
    }

    if (recBtn) {
        recBtn.style.display = "none";
    }
}

// --- 8. ANCHOR & TRANSITION ANIMATIONS ---
function setupAnimations() {
    // Add scroll listener to update sticky navbar glassmorphism
    const navbar = document.getElementById("main-nav");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("navbar-scrolled");
        } else {
            navbar.classList.remove("navbar-scrolled");
        }
    });

    // Lazy load and fade in elements using intersection observer
    const faders = document.querySelectorAll(".grid-container, .hero-section, .portfolio-grid, .news-grid, .calculator-container");
    const appearOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        });
    }, appearOptions);

    faders.forEach(fader => {
        fader.classList.add("fade-in-ready");
        appearOnScroll.observe(fader);
    });
}

// --- 9. ADMINISTRATIVE BACKOFFICE PORTAL & CMS CONTROLLERS ---

// Auth State
let isAdminLoggedIn = false;
let activeAdminTab = 'general';
let activePkgSublang = 'th';
let adminTheme = localStorage.getItem("trison_admin_theme") || "light";

// Lock-out State
const DEFAULT_PASSCODE = "Aa112233";
let loginAttempts = 0;
let lockoutUntil = 0;
const MAX_ATTEMPTS = 5;
const LOCKOUT_DURATION = 30; // seconds

function getAdminPasscode() {
    return localStorage.getItem("trison_admin_passcode") || DEFAULT_PASSCODE;
}

// Default album images (from Image/ folder, grouped by project)
const DEFAULT_ALBUMS = {
    "port-item-1":  ["Image/deye-10kw-1phase-battery-35kwh-1.jpg", "Image/deye-10kw-1phase-battery-35kwh-2.jpg"],
    "port-item-2":  ["Image/deye-10kw-1phase-battery-35kwh-2.jpg", "Image/deye-10kw-1phase-battery-35kwh-1.jpg"],
    "port-item-3":  ["Image/huawei-10-5kw-3phase-1.jpg", "Image/huawei-10-5kw-3phase-2.jpg", "Image/huawei-10-5kw-3phase-full-system.jpg"],
    "port-item-4":  ["Image/huawei-10-5kw-3phase-full-system.jpg", "Image/huawei-10-5kw-3phase-1.jpg", "Image/huawei-10-5kw-3phase-2.jpg"],
    "port-item-5":  ["Image/huawei-10kw-3phase-battery-21kwh.jpg"],
    "port-item-6":  ["Image/huawei-10kw-3phase-1.jpg", "Image/huawei-10kw-3phase-2.jpg"],
    "port-item-7":  ["Image/huawei-10kw-3phase-2.jpg", "Image/huawei-10kw-3phase-1.jpg"],
    "port-item-8":  ["Image/huawei-50kw-3phase.jpg", "Image/commercial_solar_factory.jpg"],
    "port-item-9":  ["Image/huawei-20kw-3phase-full-system.jpg"],
    "port-item-10": ["Image/huawei-10-5kw-3phase-2.jpg", "Image/huawei-10-5kw-3phase-1.jpg", "Image/huawei-10-5kw-3phase-full-system.jpg"],
    "port-item-11": ["Image/sorts-6kw-1phase-battery-10kwh.jpg"],
    "port-item-12": ["Image/hoymiles-12kw-3phase-battery-12kwh.jpg"]
};

// State: custom portfolio metadata (categories)
let customPortfolios = JSON.parse(localStorage.getItem("trison_custom_portfolios") || "{}");
// State: custom album overrides
let portfolioAlbums = JSON.parse(localStorage.getItem("trison_portfolio_albums") || "{}");

// Get album for a project (custom override > default)
function getProjectAlbum(portId) {
    if (portfolioAlbums[portId] && portfolioAlbums[portId].length > 0) return portfolioAlbums[portId];
    return DEFAULT_ALBUMS[portId] || [];
}

// CMS Media Assets State
let customMediaAssets = JSON.parse(localStorage.getItem("trison_media_assets") || "{}");

function initializeCMS() {
    // 1. Merge saved translations
    const savedTranslations = localStorage.getItem("trison_translations");
    if (savedTranslations) {
        try {
            const parsed = JSON.parse(savedTranslations);
            Object.keys(parsed).forEach(lang => {
                if (translations[lang]) {
                    Object.keys(parsed[lang]).forEach(key => {
                        translations[lang][key] = parsed[lang][key];
                    });
                }
            });
        } catch(e) {
            console.error("Error restoring custom translations:", e);
        }
    }
    
    // 2. Apply dynamic media elements
    applyMediaAssets();
    
    // 3. Apply custom portfolio structures
    applyPortfolioEdits();
}

// Apply customized images/videos on page load
function applyMediaAssets() {
    Object.keys(customMediaAssets).forEach(selector => {
        const url = customMediaAssets[selector];
        if (!url) return;
        
        // Special favicon replace
        if (selector === "favicon") {
            const link = document.querySelector("link[rel='icon']");
            if (link) link.href = url;
            return;
        }

        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
            if (el.tagName === "VIDEO") {
                el.src = url;
                const source = el.querySelector("source");
                if (source) source.src = url;
                el.load();
            } else if (el.tagName === "SOURCE") {
                el.src = url;
                const parent = el.closest("video");
                if (parent) parent.load();
            } else {
                el.src = url;
            }
        });
    });
}

// Apply customized portfolio elements (categories, album covers, badges, click handlers)
function applyPortfolioEdits() {
    // Apply category overrides
    Object.keys(customPortfolios).forEach(portId => {
        const item = customPortfolios[portId];
        const card = document.getElementById(portId);
        if (card && item.category) card.setAttribute("data-category", item.category);
    });

    // Apply album covers and photo count badges
    for (let i = 1; i <= 12; i++) {
        const portId = `port-item-${i}`;
        const card = document.getElementById(portId);
        if (!card) continue;
        const album = getProjectAlbum(portId);
        const img = card.querySelector("img");
        const imgWrapper = card.querySelector(".portfolio-img-wrapper");
        if (img && album[0]) img.src = album[0];
        // Badge
        let badge = card.querySelector(".portfolio-photo-count");
        if (album.length > 1) {
            if (!badge) { badge = document.createElement("div"); badge.className = "portfolio-photo-count"; if (imgWrapper) imgWrapper.appendChild(badge); }
            badge.innerHTML = `<i class="fas fa-images"></i> ${album.length}`;
        } else if (badge) { badge.remove(); }
        // Click handler
        card.style.cursor = "pointer";
        card.onclick = (function(id) { return function() { openPortfolioLightbox(id); }; })(portId);
    }
}

/* ============================================================
   PORTFOLIO LIGHTBOX
   ============================================================ */
let lightboxPortId = null;
let lightboxIndex  = 0;
let lightboxTouchX = 0;

window.openPortfolioLightbox = function(portId) {
    const album = getProjectAlbum(portId);
    if (!album || album.length === 0) return;
    lightboxPortId = portId;
    lightboxIndex  = 0;

    let lb = document.getElementById("portfolio-lightbox");
    if (!lb) {
        lb = document.createElement("div");
        lb.id = "portfolio-lightbox";
        lb.className = "portfolio-lightbox";
        lb.innerHTML = `
            <div class="lb-backdrop" onclick="closePortfolioLightbox()"></div>
            <div class="lb-container">
                <button class="lb-close" onclick="closePortfolioLightbox()"><i class="fas fa-times"></i></button>
                <button class="lb-nav lb-prev" onclick="navigateLightbox(-1)"><i class="fas fa-chevron-left"></i></button>
                <div class="lb-main"><img id="lb-main-img" src="" alt="Portfolio"></div>
                <button class="lb-nav lb-next" onclick="navigateLightbox(1)"><i class="fas fa-chevron-right"></i></button>
                <div class="lb-bottom">
                    <div id="lb-counter" class="lb-counter"></div>
                    <div id="lb-thumbnails" class="lb-thumbnails"></div>
                </div>
            </div>`;
        document.body.appendChild(lb);
        document.addEventListener("keydown", function(e) {
            if (!lb.classList.contains("active")) return;
            if (e.key === "ArrowRight") navigateLightbox(1);
            if (e.key === "ArrowLeft")  navigateLightbox(-1);
            if (e.key === "Escape")     closePortfolioLightbox();
        });
        lb.addEventListener("touchstart", function(e) { lightboxTouchX = e.touches[0].clientX; }, { passive: true });
        lb.addEventListener("touchend",   function(e) { const dx = e.changedTouches[0].clientX - lightboxTouchX; if (Math.abs(dx) > 50) navigateLightbox(dx < 0 ? 1 : -1); });
    }
    renderLightboxSlide(album);
    lb.classList.add("active");
    document.body.style.overflow = "hidden";
};

window.closePortfolioLightbox = function() {
    const lb = document.getElementById("portfolio-lightbox");
    if (lb) lb.classList.remove("active");
    document.body.style.overflow = "";
};

window.navigateLightbox = function(dir) {
    const album = getProjectAlbum(lightboxPortId);
    if (!album) return;
    lightboxIndex = (lightboxIndex + dir + album.length) % album.length;
    renderLightboxSlide(album);
};

window.lightboxGoTo = function(i) {
    lightboxIndex = i;
    renderLightboxSlide(getProjectAlbum(lightboxPortId));
};

function renderLightboxSlide(album) {
    const mainImg  = document.getElementById("lb-main-img");
    const counter  = document.getElementById("lb-counter");
    const thumbs   = document.getElementById("lb-thumbnails");
    const prevBtn  = document.querySelector(".lb-prev");
    const nextBtn  = document.querySelector(".lb-next");
    if (mainImg) { mainImg.style.opacity = "0"; setTimeout(() => { mainImg.src = album[lightboxIndex]; mainImg.style.opacity = "1"; }, 120); }
    if (counter) counter.textContent = `${lightboxIndex + 1} / ${album.length}`;
    if (prevBtn) prevBtn.style.display = album.length <= 1 ? "none" : "flex";
    if (nextBtn) nextBtn.style.display = album.length <= 1 ? "none" : "flex";
    if (thumbs)  thumbs.innerHTML = album.map((src, i) => `<img src="${src}" class="lb-thumb${i === lightboxIndex ? ' active' : ''}" onclick="lightboxGoTo(${i})" alt="">`).join("");
    const at = thumbs && thumbs.querySelector(".lb-thumb.active");
    if (at) at.scrollIntoView({ inline: "center", behavior: "smooth" });
}

/* ============================================================
   PORTFOLIO ALBUM CMS EDITOR
   ============================================================ */

window.loadSelectedPortfolioToEditor = function(portId) {
    const index = portId.replace("port-item-", "");
    const card  = document.getElementById(portId);
    const ci    = document.getElementById("cms-port-category");
    const tth   = document.getElementById("cms-port-title-th");
    const ten   = document.getElementById("cms-port-title-en");
    const tcn   = document.getElementById("cms-port-title-cn");
    if (card && ci) ci.value = card.getAttribute("data-category") || '';
    if (tth) tth.value = translations.th[`portProject${index}`] || '';
    if (ten) ten.value = translations.en[`portProject${index}`] || '';
    if (tcn) tcn.value = translations.zh[`portProject${index}`] || '';
    renderAlbumThumbnails(portId);
};

function renderAlbumThumbnails(portId) {
    const grid    = document.getElementById("cms-album-grid");
    const countEl = document.getElementById("cms-album-count");
    if (!grid) return;
    const album = getProjectAlbum(portId);
    if (countEl) countEl.textContent = `${album.length} รูป`;
    grid.innerHTML = album.map((src, i) => `
        <div class="cms-album-thumb">
            <img src="${src}" alt="" onclick="openPortfolioLightbox('${portId}'); lightboxGoTo(${i});">
            <button type="button" class="cms-thumb-del" onclick="removeAlbumPhoto('${portId}',${i})" title="ลบ"><i class="fas fa-trash-alt"></i></button>
            ${i === 0 ? '<span class="cms-thumb-cover-badge">Cover</span>' : ''}
        </div>`).join("");
}

window.addAlbumPhotos = function(event) {
    const files  = Array.from(event.target.files);
    const portId = document.getElementById("cms-portfolio-selector").value;
    if (!files.length || !portId) return;
    if (!portfolioAlbums[portId]) portfolioAlbums[portId] = [...getProjectAlbum(portId)];
    let done = 0;
    files.forEach(file => {
        compressImage(file, 1200, 0.82, function(dataUrl) {
            portfolioAlbums[portId].push(dataUrl);
            done++;
            if (done === files.length) {
                renderAlbumThumbnails(portId);
                applyPortfolioEdits();
                const inp = document.getElementById("cms-album-add-input");
                if (inp) inp.value = "";
            }
        });
    });
};

window.removeAlbumPhoto = function(portId, index) {
    if (!portfolioAlbums[portId]) portfolioAlbums[portId] = [...getProjectAlbum(portId)];
    portfolioAlbums[portId].splice(index, 1);
    renderAlbumThumbnails(portId);
    applyPortfolioEdits();
};

function compressImage(file, maxW, quality, cb) {
    const r = new FileReader();
    r.onload = function(e) {
        const img = new Image();
        img.onload = function() {
            let w = img.width, h = img.height;
            if (w > maxW) { h = Math.round(h * maxW / w); w = maxW; }
            const c = document.createElement("canvas"); c.width = w; c.height = h;
            c.getContext("2d").drawImage(img, 0, 0, w, h);
            cb(c.toDataURL("image/jpeg", quality));
        };
        img.src = e.target.result;
    };
    r.readAsDataURL(file);
}

// --- STAFF ACCESS CONTROL GATING ---
window.openAdminLogin = function(event) {
    if (event) event.preventDefault();
    const modal = document.getElementById("admin-login-modal");
    const passcodeField = document.getElementById("admin-passcode");
    const errorDiv = document.getElementById("admin-login-error");
    const lockoutDiv = document.getElementById("admin-lockout-msg");
    
    if (modal) {
        modal.style.display = "flex";
        if (passcodeField) {
            passcodeField.value = "";
            passcodeField.focus();
        }
        if (errorDiv) errorDiv.style.display = "none";
        if (lockoutDiv) lockoutDiv.style.display = "none";
    }
};

window.closeAdminLogin = function() {
    const modal = document.getElementById("admin-login-modal");
    if (modal) modal.style.display = "none";
};

function startLockoutCountdown() {
    const lockoutDiv = document.getElementById("admin-lockout-msg");
    const submitBtn = document.querySelector("#admin-login-form button[type='submit']");
    const passcodeField = document.getElementById("admin-passcode");
    if (!lockoutDiv) return;

    lockoutDiv.style.display = "flex";
    if (submitBtn) submitBtn.disabled = true;
    if (passcodeField) passcodeField.disabled = true;

    const interval = setInterval(() => {
        const remaining = Math.ceil((lockoutUntil - Date.now()) / 1000);
        if (remaining <= 0) {
            clearInterval(interval);
            lockoutDiv.style.display = "none";
            if (submitBtn) submitBtn.disabled = false;
            if (passcodeField) {
                passcodeField.disabled = false;
                passcodeField.value = "";
                passcodeField.focus();
            }
            loginAttempts = 0;
        } else {
            lockoutDiv.innerHTML = '<i class="fas fa-lock"></i> ใส่รหัสผิดเกินกำหนด กรุณารอ <strong>' + remaining + '</strong> วินาที';
        }
    }, 1000);
}

window.validatePasscode = function(event) {
    if (event) event.preventDefault();
    
    // Check lock-out
    if (Date.now() < lockoutUntil) return;
    
    const passcode = document.getElementById("admin-passcode").value;
    const errorDiv = document.getElementById("admin-login-error");
    const currentPasscode = getAdminPasscode();
    
    if (passcode === currentPasscode) {
        loginAttempts = 0;
        closeAdminLogin();
        toggleAdminDashboard(true);
    } else {
        loginAttempts++;
        if (loginAttempts >= MAX_ATTEMPTS) {
            lockoutUntil = Date.now() + (LOCKOUT_DURATION * 1000);
            if (errorDiv) errorDiv.style.display = "none";
            startLockoutCountdown();
        } else {
            if (errorDiv) {
                const remaining = MAX_ATTEMPTS - loginAttempts;
                errorDiv.innerHTML = '<i class="fas fa-exclamation-triangle"></i> รหัสผ่านไม่ถูกต้อง (เหลืออีก ' + remaining + ' ครั้ง)';
                errorDiv.style.display = "flex";
                errorDiv.classList.add("shake-effect");
                setTimeout(() => errorDiv.classList.remove("shake-effect"), 500);
            }
        }
    }
};

// --- CHANGE PASSCODE FROM SYSTEM TAB ---
window.changeAdminPasscode = function() {
    const oldPass = document.getElementById("cms-old-passcode").value;
    const newPass = document.getElementById("cms-new-passcode").value;
    const confirmPass = document.getElementById("cms-confirm-passcode").value;
    const statusDiv = document.getElementById("cms-passcode-status");
    const currentPasscode = getAdminPasscode();
    
    if (!statusDiv) return;
    
    // Validate old password
    if (oldPass !== currentPasscode) {
        statusDiv.className = "cms-passcode-status error";
        statusDiv.innerHTML = '<i class="fas fa-times-circle"></i> รหัสผ่านเดิมไม่ถูกต้อง';
        statusDiv.style.display = "flex";
        return;
    }
    
    // Validate new password length
    if (newPass.length < 4) {
        statusDiv.className = "cms-passcode-status error";
        statusDiv.innerHTML = '<i class="fas fa-times-circle"></i> รหัสผ่านใหม่ต้องมีอย่างน้อย 4 ตัวอักษร';
        statusDiv.style.display = "flex";
        return;
    }
    
    // Validate confirmation match
    if (newPass !== confirmPass) {
        statusDiv.className = "cms-passcode-status error";
        statusDiv.innerHTML = '<i class="fas fa-times-circle"></i> รหัสผ่านใหม่ไม่ตรงกัน กรุณาตรวจสอบอีกครั้ง';
        statusDiv.style.display = "flex";
        return;
    }
    
    // Save new passcode
    localStorage.setItem("trison_admin_passcode", newPass);
    statusDiv.className = "cms-passcode-status success";
    statusDiv.innerHTML = '<i class="fas fa-check-circle"></i> เปลี่ยนรหัสผ่านสำเร็จแล้ว!';
    statusDiv.style.display = "flex";
    
    // Clear form
    document.getElementById("cms-old-passcode").value = "";
    document.getElementById("cms-new-passcode").value = "";
    document.getElementById("cms-confirm-passcode").value = "";
    
    // Auto-hide success message
    setTimeout(() => { statusDiv.style.display = "none"; }, 3000);
};

window.toggleAdminDashboard = function(show) {
    const dashboard = document.getElementById("admin-dashboard");
    if (dashboard) {
        if (show) {
            dashboard.style.display = "flex";
            document.body.style.overflow = "hidden"; // Prevent scrolling main page behind admin overlay
            setDashboardTheme(adminTheme);
            loadCmsDataToFields(); // Populate dashboard forms with active site state
        } else {
            dashboard.style.display = "none";
            document.body.style.overflow = "";
        }
    }
};

window.closeAdminDashboard = function() {
    // Close sidebar if open (mobile)
    const sidebar = document.getElementById('admin-sidebar');
    const overlay = document.getElementById('admin-sidebar-overlay');
    if (sidebar) sidebar.classList.remove('open');
    if (overlay) overlay.style.display = 'none';
    toggleAdminDashboard(false);
};

window.toggleAdminSidebar = function() {
    const sidebar = document.getElementById('admin-sidebar');
    const overlay = document.getElementById('admin-sidebar-overlay');
    if (!sidebar) return;
    
    const isOpen = sidebar.classList.contains('open');
    if (isOpen) {
        sidebar.classList.remove('open');
        if (overlay) overlay.style.display = 'none';
    } else {
        sidebar.classList.add('open');
        if (overlay) overlay.style.display = 'block';
    }
};

// Toggle theme specifically for Backoffice dashboard overlay
window.toggleDashboardTheme = function() {
    const nextTheme = adminTheme === 'light' ? 'dark' : 'light';
    setDashboardTheme(nextTheme);
};

function setDashboardTheme(theme) {
    adminTheme = theme;
    localStorage.setItem("trison_admin_theme", theme);
    
    const dashboard = document.getElementById("admin-dashboard");
    if (dashboard) {
        dashboard.setAttribute("data-admin-theme", theme);
    }
    
    // Sync dashboard theme toggle icon
    const themeIcon = document.querySelector(".admin-theme-btn i");
    if (themeIcon) {
        themeIcon.className = theme === 'dark' ? "fas fa-sun" : "fas fa-moon";
    }
}

// Tab switcher inside Admin dashboard
window.switchAdminTab = function(tabName) {
    activeAdminTab = tabName;
    
    // Toggle active list item
    const tabItems = document.querySelectorAll(".admin-tab-item");
    tabItems.forEach(item => {
        if (item.id === `tab-${tabName}`) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });

    // Toggle active panel
    const panes = document.querySelectorAll(".admin-tab-pane");
    panes.forEach(pane => {
        if (pane.id === `pane-${tabName}`) {
            pane.classList.add("active");
        } else {
            pane.classList.remove("active");
        }
    });

    // Auto-close sidebar on mobile
    if (window.innerWidth <= 768) {
        const sidebar = document.getElementById('admin-sidebar');
        const overlay = document.getElementById('admin-sidebar-overlay');
        if (sidebar) sidebar.classList.remove('open');
        if (overlay) overlay.style.display = 'none';
    }
};

// Switch package specs language tabs inside Admin dashboard
window.switchPkgSublang = function(lang) {
    activePkgSublang = lang;
    
    // Toggle buttons
    const btns = document.querySelectorAll(".sublang-btn");
    btns.forEach(btn => {
        if (btn.id === `sublang-btn-${lang}`) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });

    // Toggle panes
    const panes = document.querySelectorAll(".sublang-pane");
    panes.forEach(pane => {
        if (pane.id === `sublang-pkg-${lang}`) {
            pane.classList.add("active");
        } else {
            pane.classList.remove("active");
        }
    });
};

// --- DATA INJECTION & CMS SYNC ---

// Load all active website values into dashboard fields
function loadCmsDataToFields() {
    // 1. General & Contact tab
    const phoneInput = document.getElementById("cms-phone");
    const lineInput = document.getElementById("cms-line");
    const emailInput = document.getElementById("cms-email");
    const lineLblInput = document.getElementById("cms-line-lbl");
    const addressInput = document.getElementById("cms-address");
    
    if (phoneInput) phoneInput.value = translations.th.officePhone || '';
    if (lineInput) lineInput.value = translations.th.officeLine || '';
    if (emailInput) emailInput.value = translations.th.officeEmail || '';
    if (lineLblInput) lineLblInput.value = translations.th.contactLine || '';
    if (addressInput) addressInput.value = translations.th.officeAddress || '';

    // Hero title inputs
    const hThTitle = document.getElementById("cms-hero-title-th");
    const hThHighlight = document.getElementById("cms-hero-highlight-th");
    const hEnTitle = document.getElementById("cms-hero-title-en");
    const hEnHighlight = document.getElementById("cms-hero-highlight-en");

    if (hThTitle) hThTitle.value = translations.th.heroTitle || '';
    if (hThHighlight) hThHighlight.value = translations.th.heroHighlight || '';
    if (hEnTitle) hEnTitle.value = translations.en.heroTitle || '';
    if (hEnHighlight) hEnHighlight.value = translations.en.heroHighlight || '';

    // 2. Packages Tab Load
    const activePkgId = document.getElementById("cms-package-selector").value;
    loadSelectedPackageToEditor(activePkgId);

    // 3. Portfolio Tab Load
    const activePortId = document.getElementById("cms-portfolio-selector").value;
    loadSelectedPortfolioToEditor(activePortId);

    // 4. News Articles
    const n1Title = document.getElementById("cms-news1-title-th");
    const n1Desc = document.getElementById("cms-news1-desc-th");
    const n2Title = document.getElementById("cms-news2-title-th");
    const n2Desc = document.getElementById("cms-news2-desc-th");
    const n3Title = document.getElementById("cms-news3-title-th");
    const n3Desc = document.getElementById("cms-news3-desc-th");

    if (n1Title) n1Title.value = translations.th.news1Title || '';
    if (n1Desc) n1Desc.value = translations.th.news1Desc || '';
    if (n2Title) n2Title.value = translations.th.news2Title || '';
    if (n2Desc) n2Desc.value = translations.th.news2Desc || '';
    if (n3Title) n3Title.value = translations.th.news3Title || '';
    if (n3Desc) n3Desc.value = translations.th.news3Desc || '';

    // 5. Media Previews
    updateMediaPreviewsInCms();
}

// Load selected Package detail specs into fields
window.loadSelectedPackageToEditor = function(pkgId) {
    // Map package ID to translation key suffixes
    const mapping = {
        'pkg-randy-5kw': { thKey: 'Randy5kw', specSelector: '#pkg-randy-5kw' },
        'pkg-deye-5kw-3p': { thKey: 'Deye5kw3p', specSelector: '#pkg-deye-5kw-3p' },
        'pkg-deye-6kw-aiko': { thKey: 'Deye6kwAiko', specSelector: '#pkg-deye-6kw-aiko' },
        'pkg-deye-6kw-logi': { thKey: 'Deye6kwLogi', specSelector: '#pkg-deye-6kw-logi' },
        'pkg-huawei-5kw': { thKey: 'Huawei5kw', specSelector: '#pkg-huawei-5kw' },
        'pkg-huawei-10kw': { thKey: 'Huawei10kw', specSelector: '#pkg-huawei-10kw' },
        'pkg-huawei-15kw': { thKey: 'Huawei15kw', specSelector: '#pkg-huawei-15kw' },
        'pkg-huawei-20kw': { thKey: 'Huawei20kw', specSelector: '#pkg-huawei-20kw' }
    };
    
    const cfg = mapping[pkgId];
    if (!cfg) return;

    // Load Price
    const priceInput = document.getElementById("cms-pkg-price");
    if (priceInput) {
        priceInput.value = translations.th[`pack${cfg.thKey}Price`] || '';
    }

    // Load Inverter, Panels, Battery specs from the DOM or translations
    const cardEl = document.querySelector(cfg.specSelector);
    const inverterInput = document.getElementById("cms-pkg-inverter");
    const panelsInput = document.getElementById("cms-pkg-panels");
    const batteryInput = document.getElementById("cms-pkg-battery");

    if (cardEl) {
        // Extract specs text from the package card DOM lists
        const specItems = cardEl.querySelectorAll(".package-specs li span");
        let inverterVal = '';
        let panelsVal = '';
        let batteryVal = '';

        specItems.forEach(span => {
            const text = span.textContent;
            if (text.includes("อินเวอร์เตอร์") || text.includes("Inverter") || text.includes("逆变器")) {
                inverterVal = text.substring(text.indexOf(":") + 1).trim();
            } else if (text.includes("Tier 1")) {
                panelsVal = text.substring(text.indexOf(":") + 1).trim();
            } else if (text.includes("แบตเตอรี่") || text.includes("Battery") || text.includes("储能电池")) {
                batteryVal = text.substring(text.indexOf(":") + 1).trim();
            }
        });

        // Fallback checks from global config
        if (inverterInput) inverterInput.value = translations.th[`packInverterVal_${pkgId}`] || inverterVal;
        if (panelsInput) panelsInput.value = translations.th[`packPanelsVal_${pkgId}`] || panelsVal;
        if (batteryInput) batteryInput.value = translations.th[`packBatteryVal_${pkgId}`] || batteryVal;
    }

    // Load language-specific fields
    const langs = ['th', 'en', 'zh'];
    langs.forEach(l => {
        const nameInput = document.getElementById(`cms-pkg-name-${l}`);
        const descInput = document.getElementById(`cms-pkg-desc-${l}`);
        const savingInput = document.getElementById(`cms-pkg-saving-${l}`);
        const bestInput = document.getElementById(`cms-pkg-best-${l}`);

        if (nameInput) nameInput.value = translations[l][`pack${cfg.thKey}Name`] || '';
        if (descInput) descInput.value = translations[l][`pack${cfg.thKey}Desc`] || '';
        if (savingInput) savingInput.value = translations[l][`pack${cfg.thKey}SavingSpec`] || '';
        if (bestInput) bestInput.value = translations[l][`pack${cfg.thKey}BestSpec`] || '';
    });
};

// Load selected portfolio case study metadata into fields
window.loadSelectedPortfolioToEditor = function(portId) {
    const categoryInput = document.getElementById("cms-port-category");
    const titleThInput = document.getElementById("cms-port-title-th");
    const titleEnInput = document.getElementById("cms-port-title-en");
    const titleCnInput = document.getElementById("cms-port-title-cn");
    
    // Find matching N index
    const index = portId.replace("port-item-", "");

    const card = document.getElementById(portId);
    if (card && categoryInput) {
        categoryInput.value = card.getAttribute("data-category") || '';
    }

    if (titleThInput) titleThInput.value = translations.th[`portProject${index}`] || '';
    if (titleEnInput) titleEnInput.value = translations.en[`portProject${index}`] || '';
    if (titleCnInput) titleCnInput.value = translations.zh[`portProject${index}`] || '';

    // Handle photo previews in dashboard
    const imgPreview = document.getElementById("cms-port-img-preview");
    const imgStatus = document.getElementById("cms-port-img-status");
    const currentSrc = card ? card.querySelector("img").src : '';
    
    if (imgPreview) {
        if (currentSrc) {
            imgPreview.src = currentSrc;
            imgPreview.style.display = "block";
            if (imgStatus) imgStatus.style.display = "none";
        } else {
            imgPreview.style.display = "none";
            if (imgStatus) imgStatus.style.display = "block";
        }
    }
};

// (Legacy single-image upload — replaced by album system)

// Handle core assets file upload previews in dashboard
window.uploadCoreMediaAsset = function(event, selector, type) {
    const file = event.target.files[0];
    if (!file) return;

    const localUrl = URL.createObjectURL(file);
    
    // Update live previews in backoffice instantly
    if (type === 'logo') {
        const logoPreview = document.getElementById("cms-logo-preview");
        if (logoPreview) logoPreview.src = localUrl;
    } else if (type === 'heroImg') {
        const heroPreview = document.getElementById("cms-heroimg-preview");
        if (heroPreview) heroPreview.src = localUrl;
    } else if (type === 'promoVideo') {
        const statusSpan = document.getElementById("cms-video-status");
        if (statusSpan) {
            statusSpan.textContent = "Custom Video Loaded (" + (file.size / 1024 / 1024).toFixed(1) + " MB)";
            statusSpan.style.color = "#10b981";
        }
    }

    // Apply directly to selector live preview in background page
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
        if (el.tagName === 'VIDEO') {
            el.src = localUrl;
            const source = el.querySelector("source");
            if (source) source.src = localUrl;
            el.load();
        } else if (el.tagName === 'SOURCE') {
            el.src = localUrl;
            const parent = el.closest("video");
            if (parent) parent.load();
        } else {
            el.src = localUrl;
        }
    });

    // Special favicon trigger
    if (type === 'logo') {
        const favicon = document.querySelector("link[rel='icon']");
        if (favicon) favicon.href = localUrl;
        customMediaAssets["favicon"] = localUrl;
    }

    // Save mapping base64/local URL
    if (file.size < 2.5 * 1024 * 1024) { // Save Base64 if file is small (under 2.5MB) to keep it saved permanently
        const reader = new FileReader();
        reader.onload = function(e) {
            customMediaAssets[selector] = e.target.result;
        };
        reader.readAsDataURL(file);
    } else { // Large files (like videos) are mapped dynamically in session using Blob URL
        customMediaAssets[selector] = localUrl;
        console.warn("Large asset file detected. Loaded as Blob Object URL. Note: Heavy files are persistent within browser session and may require re-selection after deep browser clear.");
    }
};

function updateMediaPreviewsInCms() {
    const logoPreview = document.getElementById("cms-logo-preview");
    const heroPreview = document.getElementById("cms-heroimg-preview");
    const videoStatus = document.getElementById("cms-video-status");

    const activeLogo = document.getElementById("nav-logo-img");
    const activeHero = document.getElementById("hero-panel-img");
    const activeVideo = document.getElementById("promo-video-player");

    if (logoPreview && activeLogo) logoPreview.src = activeLogo.src;
    if (heroPreview && activeHero) heroPreview.src = activeHero.src;
    if (videoStatus && activeVideo) {
        if (customMediaAssets["#promo-video-player"]) {
            videoStatus.textContent = "Custom Video Loaded";
            videoStatus.style.color = "#10b981";
        } else {
            videoStatus.textContent = "Using Default (Video/ADS.mp4)";
            videoStatus.style.color = "var(--accent-cyan)";
        }
    }
}

// --- SAVE ACTIONS & RESTORATION ---

// Grab all form values, commit to localStorage, and hot-update landing page live!
window.saveSiteEdits = function(event) {
    if (event) event.preventDefault();
    const saveBtn = document.getElementById("cms-save-btn");
    const saveNoti = document.getElementById("cms-save-notification");
    const originalContent = saveBtn.innerHTML;

    saveBtn.disabled = true;
    saveBtn.innerHTML = `<span class="loading-spinner"></span> Saving...`;

    // 1. Process General & Contact Text fields
    const officeFields = ['officePhone', 'officeLine', 'officeEmail', 'contactLine', 'officeAddress'];
    officeFields.forEach(f => {
        const input = document.querySelector(`[name="${f}"]`);
        if (input) {
            const val = input.value;
            // Update in all 3 dictionaries since contact info displays globally
            translations.th[f] = val;
            translations.en[f] = val;
            translations.zh[f] = val;
        }
    });

    // Hero title inputs
    const hThTitle = document.getElementById("cms-hero-title-th");
    const hThHighlight = document.getElementById("cms-hero-highlight-th");
    const hEnTitle = document.getElementById("cms-hero-title-en");
    const hEnHighlight = document.getElementById("cms-hero-highlight-en");

    if (hThTitle) {
        translations.th.heroTitle = hThTitle.value;
        translations.zh.heroTitle = hThTitle.value; // Chinese defaults
    }
    if (hThHighlight) {
        translations.th.heroHighlight = hThHighlight.value;
        translations.zh.heroHighlight = hThHighlight.value;
    }
    if (hEnTitle) translations.en.heroTitle = hEnTitle.value;
    if (hEnHighlight) translations.en.heroHighlight = hEnHighlight.value;

    // 2. Process active Package specifications edits
    const pkgId = document.getElementById("cms-package-selector").value;
    const mapping = {
        'pkg-randy-5kw': { thKey: 'Randy5kw', index: 1 },
        'pkg-deye-5kw-3p': { thKey: 'Deye5kw3p', index: 2 },
        'pkg-deye-6kw-aiko': { thKey: 'Deye6kwAiko', index: 3 },
        'pkg-deye-6kw-logi': { thKey: 'Deye6kwLogi', index: 4 },
        'pkg-huawei-5kw': { thKey: 'Huawei5kw', index: 5 },
        'pkg-huawei-10kw': { thKey: 'Huawei10kw', index: 6 },
        'pkg-huawei-15kw': { thKey: 'Huawei15kw', index: 7 },
        'pkg-huawei-20kw': { thKey: 'Huawei20kw', index: 8 }
    };
    
    const cfg = mapping[pkgId];
    if (cfg) {
        // Save price in dictionary
        const priceVal = document.getElementById("cms-pkg-price").value;
        translations.th[`pack${cfg.thKey}Price`] = priceVal;
        translations.en[`pack${cfg.thKey}Price`] = priceVal;
        translations.zh[`pack${cfg.thKey}Price`] = priceVal;

        // Save spec text overrides inside DOM directly
        const inverterVal = document.getElementById("cms-pkg-inverter").value;
        const panelsVal = document.getElementById("cms-pkg-panels").value;
        const batteryVal = document.getElementById("cms-pkg-battery").value;
        
        // Save dynamically to dictionary spec overrides to keep language consistency
        const langs = ['th', 'en', 'zh'];
        langs.forEach(l => {
            translations[l][`pack${cfg.thKey}Name`] = document.getElementById(`cms-pkg-name-${l}`).value;
            translations[l][`pack${cfg.thKey}Desc`] = document.getElementById(`cms-pkg-desc-${l}`).value;
            translations[l][`pack${cfg.thKey}SavingSpec`] = document.getElementById(`cms-pkg-saving-${l}`).value;
            translations[l][`pack${cfg.thKey}BestSpec`] = document.getElementById(`cms-pkg-best-${l}`).value;
        });

        // Store standard inline specs mappings directly inside a global translation config
        translations.th[`packInverterVal_${pkgId}`] = inverterVal;
        translations.en[`packInverterVal_${pkgId}`] = inverterVal;
        translations.zh[`packInverterVal_${pkgId}`] = inverterVal;

        translations.th[`packPanelsVal_${pkgId}`] = panelsVal;
        translations.en[`packPanelsVal_${pkgId}`] = panelsVal;
        translations.zh[`packPanelsVal_${pkgId}`] = panelsVal;

        translations.th[`packBatteryVal_${pkgId}`] = batteryVal;
        translations.en[`packBatteryVal_${pkgId}`] = batteryVal;
        translations.zh[`packBatteryVal_${pkgId}`] = batteryVal;
    }

    // 3. Process active Portfolio category settings
    const portId = document.getElementById("cms-portfolio-selector").value;
    const index = portId.replace("port-item-", "");
    if (index) {
        if (!customPortfolios[portId]) customPortfolios[portId] = {};
        
        customPortfolios[portId].category = document.getElementById("cms-port-category").value;
        
        // Save titles in dictionaries
        translations.th[`portProject${index}`] = document.getElementById("cms-port-title-th").value;
        translations.en[`portProject${index}`] = document.getElementById("cms-port-title-en").value;
        translations.zh[`portProject${index}`] = document.getElementById("cms-port-title-cn").value;
    }

    // 4. Process News Articles
    const n1Title = document.getElementById("cms-news1-title-th");
    const n1Desc = document.getElementById("cms-news1-desc-th");
    const n2Title = document.getElementById("cms-news2-title-th");
    const n2Desc = document.getElementById("cms-news2-desc-th");
    const n3Title = document.getElementById("cms-news3-title-th");
    const n3Desc = document.getElementById("cms-news3-desc-th");

    if (n1Title) translations.th.news1Title = n1Title.value;
    if (n1Desc) translations.th.news1Desc = n1Desc.value;
    if (n2Title) translations.th.news2Title = n2Title.value;
    if (n2Desc) translations.th.news2Desc = n2Desc.value;
    if (n3Title) translations.th.news3Title = n3Title.value;
    if (n3Desc) translations.th.news3Desc = n3Desc.value;

    // --- WRITE EVERYTHING TO LOCALSTORAGE ---
    localStorage.setItem("trison_translations", JSON.stringify(translations));
    localStorage.setItem("trison_media_assets", JSON.stringify(customMediaAssets));
    localStorage.setItem("trison_custom_portfolios", JSON.stringify(customPortfolios));
    localStorage.setItem("trison_portfolio_albums", JSON.stringify(portfolioAlbums));

    // Hot Rerender underlying landing page dynamically!
    setLanguage(currentLang);
    applyMediaAssets();
    applyPortfolioEdits();

    // Hot Update package details text nodes specifically if custom inline values exist
    const packagesList = ['pkg-randy-5kw', 'pkg-deye-5kw-3p', 'pkg-deye-6kw-aiko', 'pkg-deye-6kw-logi', 'pkg-huawei-5kw', 'pkg-huawei-10kw', 'pkg-huawei-15kw', 'pkg-huawei-20kw'];
    packagesList.forEach(pId => {
        const card = document.getElementById(pId);
        if (card) {
            const specItems = card.querySelectorAll(".package-specs li span");
            specItems.forEach(span => {
                const text = span.textContent;
                if (text.includes("อินเวอร์เตอร์") || text.includes("Inverter") || text.includes("逆变器")) {
                    const savedVal = translations[currentLang][`packInverterVal_${pId}`];
                    if (savedVal) span.innerHTML = `<strong data-translate="packInverter">${translations[currentLang].packInverter}</strong>: ${savedVal}`;
                } else if (text.includes("Tier 1")) {
                    const savedVal = translations[currentLang][`packPanelsVal_${pId}`];
                    if (savedVal) span.innerHTML = `<strong data-translate="packPanels">${translations[currentLang].packPanels}</strong>: ${savedVal}`;
                } else if (text.includes("แบตเตอรี่") || text.includes("Battery") || text.includes("储能电池")) {
                    const savedVal = translations[currentLang][`packBatteryVal_${pId}`];
                    if (savedVal) span.innerHTML = `<strong data-translate="packBattery">${translations[currentLang].packBattery}</strong>: ${savedVal}`;
                }
            });
        }
    });

    // Populate consult select options to sync naming
    const formSelect = document.getElementById("form-package");
    if (formSelect) {
        const optionRandy = formSelect.querySelector("option[value='Randy 5 kW - 1 Phase']");
        const optionDeye3p = formSelect.querySelector("option[value='Deye 5 kW - 3 Phase']");
        const optionDeyeAiko = formSelect.querySelector("option[value='Deye 6 kW - 1 Phase (AIKO)']");
        const optionDeyeLogi = formSelect.querySelector("option[value='Deye 6 kW - 1 Phase (Logi)']");
        const optionHuawei5 = formSelect.querySelector("option[value='Huawei 5 kW - 1 Phase']");
        const optionHuawei10 = formSelect.querySelector("option[value='Huawei 10 kW - 3 Phase']");
        const optionHuawei15 = formSelect.querySelector("option[value='Huawei 15 kW - 3 Phase']");
        const optionHuawei20 = formSelect.querySelector("option[value='Huawei 20 kW - 3 Phase']");

        if (optionRandy) optionRandy.textContent = translations[currentLang].packRandy5kwName;
        if (optionDeye3p) optionDeye3p.textContent = translations[currentLang].packDeye5kw3pName;
        if (optionDeyeAiko) optionDeyeAiko.textContent = translations[currentLang].packDeye6kwAikoName;
        if (optionDeyeLogi) optionDeyeLogi.textContent = translations[currentLang].packDeye6kwLogiName;
        if (optionHuawei5) optionHuawei5.textContent = translations[currentLang].packHuawei5kwName;
        if (optionHuawei10) optionHuawei10.textContent = translations[currentLang].packHuawei10kwName;
        if (optionHuawei15) optionHuawei15.textContent = translations[currentLang].packHuawei15kwName;
        if (optionHuawei20) optionHuawei20.textContent = translations[currentLang].packHuawei20kwName;
    }

    setTimeout(() => {
        saveBtn.disabled = false;
        saveBtn.innerHTML = originalContent;

        // Show Success Checkmark Notification
        if (saveNoti) {
            saveNoti.style.opacity = "1";
            saveNoti.style.transform = "translateY(0)";
            setTimeout(() => {
                saveNoti.style.opacity = "0";
                saveNoti.style.transform = "translateY(15px)";
            }, 3000);
        }
    }, 1000);
};

// Reset system: clear all custom configs
window.resetSiteToDefaults = function() {
    if (confirm("คุณแน่ใจหรือไม่ที่จะรีเซ็ตข้อมูลทั้งหมด? รูปภาพ, ราคา และการแก้ไขทั้งหมดจะถูกลบออก")) {
        localStorage.removeItem("trison_translations");
        localStorage.removeItem("trison_media_assets");
        localStorage.removeItem("trison_custom_portfolios");
        localStorage.removeItem("trison_portfolio_albums");
        location.reload();
    }
};

/* =============================================================
   NEW SECTIONS JS: FAQ, Equipment Carousel, Counter Animation
   ============================================================= */

// --- FAQ Accordion ---
window.toggleFaq = function(id) {
    const item = document.getElementById(id);
    if (!item) return;
    const isOpen = item.classList.contains('open');
    // Close all others
    document.querySelectorAll('.faq-item.open').forEach(el => {
        el.classList.remove('open');
        el.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
    });
    // Toggle this one
    if (!isOpen) {
        item.classList.add('open');
        item.querySelector('.faq-question').setAttribute('aria-expanded', 'true');
    }
};

// --- Equipment Carousel ---
(function initEquipCarousel() {
    const track = document.getElementById('equip-track');
    const barFill = document.getElementById('equip-bar-fill');
    const curEl = document.getElementById('equip-cur');
    const totalEl = document.getElementById('equip-total');
    const prevBtn = document.getElementById('equip-prev');
    const nextBtn = document.getElementById('equip-next');
    if (!track) return;

    const cards = track.querySelectorAll('.equip-card');
    const total = cards.length;
    if (totalEl) totalEl.textContent = String(total).padStart(2, '0');

    function updateState() {
        if (!cards.length) return;
        const scrollLeft = track.scrollLeft;
        const cardWidth = cards[0].offsetWidth + 20; // gap
        const curIdx = Math.round(scrollLeft / cardWidth);
        if (curEl) curEl.textContent = String(curIdx + 1).padStart(2, '0');
        if (barFill) barFill.style.width = ((curIdx + 1) / total * 100) + '%';
        if (prevBtn) prevBtn.disabled = curIdx === 0;
        if (nextBtn) nextBtn.disabled = curIdx >= total - 1;
    }

    window.equipScroll = function(dir) {
        const cardWidth = cards[0] ? cards[0].offsetWidth + 20 : 280;
        track.scrollBy({ left: dir * cardWidth, behavior: 'smooth' });
    };

    track.addEventListener('scroll', updateState, { passive: true });
    updateState();
})();

// --- Animated Counter (Why Choose Us stats) ---
(function initCounters() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            const target = parseInt(el.getAttribute('data-count'), 10);
            if (isNaN(target)) return;
            const duration = 1800;
            const start = performance.now();
            function step(now) {
                const progress = Math.min((now - start) / duration, 1);
                const ease = 1 - Math.pow(1 - progress, 3);
                el.textContent = Math.floor(ease * target);
                if (progress < 1) requestAnimationFrame(step);
                else el.textContent = target;
            }
            requestAnimationFrame(step);
            observer.unobserve(el);
        });
    }, { threshold: 0.4 });

    document.querySelectorAll('[data-count]').forEach(el => observer.observe(el));
})();

/* =============================================================
   SCROLL REVEAL OBSERVER + BRAND MARQUEE PAUSE
   ============================================================= */
(function initScrollReveal() {
    // Observe .reveal elements - fade in on scroll
    const revealObs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    // Observe .reveal-stagger containers — trigger children
    const staggerObs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const children = entry.target.children;
            Array.from(children).forEach((child, i) => {
                setTimeout(() => {
                    child.style.opacity = '1';
                    child.style.transform = 'none';
                }, i * 70);
            });
            staggerObs.unobserve(entry.target);
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

    // Apply initial hidden state to stagger children
    document.querySelectorAll('.reveal-stagger').forEach(container => {
        Array.from(container.children).forEach(child => {
            child.style.opacity = '0';
            child.style.transform = 'translateY(24px)';
            child.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
        });
        staggerObs.observe(container);
    });

    // Observe plain reveal elements
    document.querySelectorAll('.reveal').forEach(el => {
        revealObs.observe(el);
    });
})();

/* ============================================================
   PACKAGE CUSTOMIZER — Customer-facing wizard
   ============================================================ */

let customizerState = {
    basePackageId: null,
    basePackageName: '',
    basePrice: 0,
    currentStep: 1,
    totalSteps: 5,
    selections: {
        inverter: null,
        panel: null,
        panelQty: 8,
        battery: null,
        cable: null,
        mounting: null,
        addons: []
    },
    installationFee: 0
};

window.openPackageCustomizer = function(pkgId) {
    const cfg = packageBaseConfig[pkgId];
    if (!cfg) return;

    // Reset state
    customizerState.basePackageId = pkgId;
    customizerState.currentStep = 1;
    customizerState.installationFee = cfg.installationFee;

    // Set default selections from package config
    customizerState.selections = {
        inverter: cfg.inverter,
        panel: cfg.panel,
        panelQty: cfg.panelQty,
        battery: cfg.battery,
        cable: cfg.cable,
        mounting: cfg.mounting,
        addons: [...(cfg.addons || [])]
    };

    // Get base price from page
    const card = document.getElementById(pkgId);
    if (card) {
        const priceEl = card.querySelector('.package-price');
        if (priceEl) {
            const priceText = priceEl.textContent.replace(/[^0-9]/g, '');
            customizerState.basePrice = parseInt(priceText) || 0;
        }
        const nameEl = card.querySelector('.package-name');
        customizerState.basePackageName = nameEl ? nameEl.textContent : pkgId;
    }

    // Show overlay
    const overlay = document.getElementById('package-customizer-overlay');
    if (overlay) {
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        renderCustomizerStep(1);
    }
};

window.closePackageCustomizer = function() {
    const overlay = document.getElementById('package-customizer-overlay');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = '';
};

window.navigateCustomizerStep = function(direction) {
    const newStep = customizerState.currentStep + direction;
    if (newStep < 1 || newStep > customizerState.totalSteps) return;
    renderCustomizerStep(newStep);
};

function renderCustomizerStep(step) {
    customizerState.currentStep = step;
    const t = translations[currentLang];

    // Update stepper UI
    for (let i = 1; i <= 5; i++) {
        const stepEl = document.getElementById(`cust-step-${i}`);
        if (!stepEl) continue;
        stepEl.classList.remove('active', 'completed');
        if (i < step) stepEl.classList.add('completed');
        else if (i === step) stepEl.classList.add('active');
    }

    // Update nav buttons
    const prevBtn = document.getElementById('cust-btn-prev');
    const nextBtn = document.getElementById('cust-btn-next');
    if (prevBtn) prevBtn.style.display = step > 1 ? 'flex' : 'none';
    if (nextBtn) {
        if (step === 4) {
            nextBtn.textContent = t.customizerBtnFinish || 'ดูสรุปแพคเกจ';
        } else if (step === 5) {
            nextBtn.style.display = 'none';
        } else {
            nextBtn.textContent = t.customizerBtnNext || 'ถัดไป →';
            nextBtn.style.display = 'flex';
        }
        if (step < 5) nextBtn.style.display = 'flex';
    }

    // Render content
    const contentArea = document.getElementById('customizer-content-area');
    if (!contentArea) return;

    let html = '';
    switch(step) {
        case 1: html = renderInverterStep(); break;
        case 2: html = renderPanelStep(); break;
        case 3: html = renderBatteryStep(); break;
        case 4: html = renderAddonsStep(); break;
        case 5: html = renderSummaryStep(); break;
    }

    contentArea.style.opacity = '0';
    contentArea.style.transform = 'translateX(20px)';
    setTimeout(() => {
        contentArea.innerHTML = html;
        contentArea.style.opacity = '1';
        contentArea.style.transform = 'translateX(0)';
        // Re-attach events for addons step
        if (step === 4) attachAddonEvents();
        if (step === 2) attachPanelQtyEvents();
    }, 150);

    updateCustomizerPrice();
}

function renderInverterStep() {
    const t = translations[currentLang];
    const sel = customizerState.selections;
    const cfg = packageBaseConfig[customizerState.basePackageId];
    return `
        <div class="cust-step-title">${t.customizerStep1 || 'อินเวอร์เตอร์'}</div>
        <p class="cust-step-hint">เลือกอินเวอร์เตอร์ที่ต้องการ</p>
        <div class="cust-options-grid">
            ${componentCatalog.inverters.map(inv => `
                <div class="cust-option-card ${sel.inverter === inv.id ? 'selected' : ''}" onclick="selectCustComponent('inverter','${inv.id}')">
                    ${cfg && cfg.inverter === inv.id ? `<div class="cust-current-badge">${t.customizerCurrentBadge || 'อุปกรณ์เดิม'}</div>` : ''}
                    ${sel.inverter === inv.id ? '<div class="cust-check">✓</div>' : ''}
                    <div class="cust-option-brand">${inv.brand}</div>
                    <div class="cust-option-name">${inv.model}</div>
                    <div class="cust-option-spec">${inv.specs}</div>
                    <div class="cust-option-price">${inv.price === 0 ? 'ฟรี' : '฿' + inv.price.toLocaleString()}</div>
                    <button class="cust-select-btn ${sel.inverter === inv.id ? 'selected' : ''}">${sel.inverter === inv.id ? (t.customizerSelectedBtn || 'เลือกแล้ว ✓') : (t.customizerSelectBtn || 'เลือก')}</button>
                </div>
            `).join('')}
        </div>
    `;
}

function renderPanelStep() {
    const t = translations[currentLang];
    const sel = customizerState.selections;
    const cfg = packageBaseConfig[customizerState.basePackageId];
    const selectedPanel = componentCatalog.panels.find(p => p.id === sel.panel);
    const totalKw = selectedPanel ? ((selectedPanel.watts * sel.panelQty) / 1000).toFixed(2) : '-';
    return `
        <div class="cust-step-title">${t.customizerStep2 || 'แผงโซล่า'}</div>
        <p class="cust-step-hint">เลือกยี่ห้อแผงโซล่าเซลล์ที่ต้องการ</p>
        <div class="cust-options-grid">
            ${componentCatalog.panels.map(panel => `
                <div class="cust-option-card ${sel.panel === panel.id ? 'selected' : ''}" onclick="selectCustComponent('panel','${panel.id}')">
                    ${cfg && cfg.panel === panel.id ? `<div class="cust-current-badge">${t.customizerCurrentBadge || 'อุปกรณ์เดิม'}</div>` : ''}
                    ${sel.panel === panel.id ? '<div class="cust-check">✓</div>' : ''}
                    <div class="cust-option-brand">${panel.brand}</div>
                    <div class="cust-option-name">${panel.model}</div>
                    <div class="cust-option-spec">${panel.specs}</div>
                    <div class="cust-option-price">${t.customizerPanelPrice || 'ราคา/แผง'}: ฿${panel.pricePerPanel.toLocaleString()}</div>
                    <button class="cust-select-btn ${sel.panel === panel.id ? 'selected' : ''}">${sel.panel === panel.id ? (t.customizerSelectedBtn || 'เลือกแล้ว ✓') : (t.customizerSelectBtn || 'เลือก')}</button>
                </div>
            `).join('')}
        </div>
        <div class="cust-panel-qty-box">
            <div class="cust-qty-label">${t.customizerPanelQty || 'จำนวนแผง'}:</div>
            <div class="cust-qty-control">
                <button type="button" class="cust-qty-btn" id="cust-qty-minus" onclick="changePanelQty(-1)">−</button>
                <span class="cust-qty-display" id="cust-qty-display">${sel.panelQty}</span>
                <button type="button" class="cust-qty-btn" id="cust-qty-plus" onclick="changePanelQty(1)">+</button>
            </div>
            <div class="cust-qty-info">
                <span>${t.customizerTotalKw || 'กำลังผลิตรวม'}: <strong id="cust-total-kw">${totalKw} kW</strong></span>
            </div>
        </div>
    `;
}

function renderBatteryStep() {
    const t = translations[currentLang];
    const sel = customizerState.selections;
    const cfg = packageBaseConfig[customizerState.basePackageId];
    return `
        <div class="cust-step-title">${t.customizerStep3 || 'แบตเตอรี่'}</div>
        <p class="cust-step-hint">เลือกแบตเตอรี่สำรองไฟ หรือระบบ On-Grid (ไม่ใช้แบตเตอรี่)</p>
        <div class="cust-options-grid">
            ${componentCatalog.batteries.map(bat => `
                <div class="cust-option-card ${sel.battery === bat.id ? 'selected' : ''} ${bat.id === 'none' ? 'cust-no-battery' : ''}" onclick="selectCustComponent('battery','${bat.id}')">
                    ${cfg && cfg.battery === bat.id ? `<div class="cust-current-badge">${t.customizerCurrentBadge || 'อุปกรณ์เดิม'}</div>` : ''}
                    ${sel.battery === bat.id ? '<div class="cust-check">✓</div>' : ''}
                    <div class="cust-option-brand">${bat.brand}</div>
                    <div class="cust-option-name">${bat.model}</div>
                    <div class="cust-option-spec">${bat.specs}</div>
                    <div class="cust-option-price">${bat.price === 0 ? (bat.id === 'none' ? '฿0' : 'ฟรี') : '฿' + bat.price.toLocaleString()}</div>
                    <button class="cust-select-btn ${sel.battery === bat.id ? 'selected' : ''}">${sel.battery === bat.id ? (t.customizerSelectedBtn || 'เลือกแล้ว ✓') : (t.customizerSelectBtn || 'เลือก')}</button>
                </div>
            `).join('')}
        </div>
    `;
}

function renderAddonsStep() {
    const t = translations[currentLang];
    const sel = customizerState.selections;
    return `
        <div class="cust-step-title">${t.customizerStep4 || 'อุปกรณ์เพิ่มเติม'}</div>
        
        <div class="cust-addons-section">
            <div class="cust-addon-label">${t.customizerCableTitle || 'สายไฟ DC Solar'}:</div>
            <div class="cust-options-grid cust-options-small">
                ${componentCatalog.cables.map(c => `
                    <div class="cust-option-card cust-option-sm ${sel.cable === c.id ? 'selected' : ''}" onclick="selectCustComponent('cable','${c.id}')">
                        ${sel.cable === c.id ? '<div class="cust-check">✓</div>' : ''}
                        <div class="cust-option-name">${c.model}</div>
                        <div class="cust-option-spec">${c.specs}</div>
                        <div class="cust-option-price">฿${c.pricePerSet.toLocaleString()} / ชุด</div>
                        <button class="cust-select-btn ${sel.cable === c.id ? 'selected' : ''}">${sel.cable === c.id ? '✓' : t.customizerSelectBtn || 'เลือก'}</button>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="cust-addons-section">
            <div class="cust-addon-label">${t.customizerMountTitle || 'ระบบราง / โครงยึด'}:</div>
            <div class="cust-options-grid cust-options-small">
                ${componentCatalog.mounting.map(m => `
                    <div class="cust-option-card cust-option-sm ${sel.mounting === m.id ? 'selected' : ''}" onclick="selectCustComponent('mounting','${m.id}')">
                        ${sel.mounting === m.id ? '<div class="cust-check">✓</div>' : ''}
                        <div class="cust-option-name">${m.model}</div>
                        <div class="cust-option-spec">${m.specs}</div>
                        <div class="cust-option-price">฿${m.pricePerSet.toLocaleString()} / ชุด</div>
                        <button class="cust-select-btn ${sel.mounting === m.id ? 'selected' : ''}">${sel.mounting === m.id ? '✓' : t.customizerSelectBtn || 'เลือก'}</button>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="cust-addons-section">
            <div class="cust-addon-label">${t.customizerAddonTitle || 'อุปกรณ์เสริม'} (เลือกได้หลายรายการ):</div>
            <div class="cust-addons-checkboxes">
                ${componentCatalog.addons.map(a => `
                    <label class="cust-addon-item ${sel.addons.includes(a.id) ? 'checked' : ''}" data-addon-id="${a.id}">
                        <input type="checkbox" class="cust-addon-check" data-addon-id="${a.id}" ${sel.addons.includes(a.id) ? 'checked' : ''} ${a.price === 0 ? 'disabled' : ''}>
                        <div class="cust-addon-info">
                            <span class="cust-addon-name">${a.name}</span>
                            <span class="cust-addon-desc">${a.description}</span>
                        </div>
                        <span class="cust-addon-price">${a.price === 0 ? 'ฟรี' : '+฿' + a.price.toLocaleString()}</span>
                    </label>
                `).join('')}
            </div>
        </div>
    `;
}

function renderSummaryStep() {
    const t = translations[currentLang];
    const sel = customizerState.selections;

    const inv = componentCatalog.inverters.find(x => x.id === sel.inverter);
    const panel = componentCatalog.panels.find(x => x.id === sel.panel);
    const bat = componentCatalog.batteries.find(x => x.id === sel.battery);
    const cable = componentCatalog.cables.find(x => x.id === sel.cable);
    const mount = componentCatalog.mounting.find(x => x.id === sel.mounting);
    const addonItems = componentCatalog.addons.filter(x => sel.addons.includes(x.id));

    const totalKw = panel ? ((panel.watts * sel.panelQty) / 1000).toFixed(2) : '-';
    const totalPrice = calcCustomizerTotal();
    const monthlySavings = Math.round(totalKw * 4.2 * 30 * 4.5 * 0.6);
    const paybackYears = monthlySavings > 0 ? (totalPrice / (monthlySavings * 12)).toFixed(1) : '-';

    return `
        <div class="cust-step-title">${t.customizerSummaryTitle || 'สรุปแพคเกจที่คุณเลือก'}</div>
        <div class="cust-summary-grid">
            <div class="cust-summary-table">
                <div class="cust-summary-row"><span class="cust-sum-label">${t.customizerInverter || 'อินเวอร์เตอร์'}</span><span class="cust-sum-val">${inv ? inv.model : '-'}</span></div>
                <div class="cust-summary-row"><span class="cust-sum-label">${t.customizerPanel || 'แผงโซล่า'}</span><span class="cust-sum-val">${panel ? panel.model + ' × ' + sel.panelQty + ' แผง (' + totalKw + ' kW)' : '-'}</span></div>
                <div class="cust-summary-row"><span class="cust-sum-label">${t.customizerBattery || 'แบตเตอรี่'}</span><span class="cust-sum-val">${bat ? bat.model : '-'}</span></div>
                <div class="cust-summary-row"><span class="cust-sum-label">${t.customizerCable || 'สายไฟ DC'}</span><span class="cust-sum-val">${cable ? cable.model : '-'}</span></div>
                <div class="cust-summary-row"><span class="cust-sum-label">${t.customizerMounting || 'ระบบราง'}</span><span class="cust-sum-val">${mount ? mount.model : '-'}</span></div>
                <div class="cust-summary-row"><span class="cust-sum-label">${t.customizerAddons || 'อุปกรณ์เสริม'}</span><span class="cust-sum-val">${addonItems.length ? addonItems.map(a => a.name).join(', ') : '-'}</span></div>
                <div class="cust-summary-row"><span class="cust-sum-label">${t.customizerInstallFee || 'ค่าติดตั้ง'}</span><span class="cust-sum-val">฿${customizerState.installationFee.toLocaleString()}</span></div>
            </div>
            <div class="cust-summary-stats">
                <div class="cust-stat-card">
                    <span class="cust-stat-label">${t.customizerMonthSave || 'ประหยัดต่อเดือน'}</span>
                    <span class="cust-stat-val">฿${monthlySavings.toLocaleString()} / เดือน</span>
                </div>
                <div class="cust-stat-card">
                    <span class="cust-stat-label">${t.customizerPayback || 'ระยะคืนทุน'}</span>
                    <span class="cust-stat-val">~${paybackYears} ปี</span>
                </div>
                <div class="cust-stat-card cust-stat-price">
                    <span class="cust-stat-label">${t.customizerTotalPrice || 'ราคารวม'}</span>
                    <span class="cust-stat-val cust-total-price-large">฿${totalPrice.toLocaleString()}</span>
                </div>
            </div>
        </div>
        <div class="cust-summary-actions">
            <button type="button" class="btn btn-primary cust-action-btn" onclick="generateQuotationPDF()">${t.customizerDownloadPdf || '📄 ดาวน์โหลดใบเสนอราคา PDF'}</button>
            <button type="button" class="btn btn-secondary cust-action-btn" onclick="sendToLineOA()">${t.customizerSendLine || '💬 ส่งสรุปผ่าน LINE OA'}</button>
            <button type="button" class="btn btn-outline cust-action-btn" onclick="navigateCustomizerStep(-4)">${t.customizerEditBack || '← กลับไปแก้ไข'}</button>
        </div>
    `;
}

window.selectCustComponent = function(category, itemId) {
    if (category === 'addon') return; // Handled by checkbox
    customizerState.selections[category] = itemId;
    renderCustomizerStep(customizerState.currentStep);
};

window.changePanelQty = function(delta) {
    const newQty = customizerState.selections.panelQty + delta;
    if (newQty < 1 || newQty > 100) return;
    customizerState.selections.panelQty = newQty;
    // Update display without full re-render
    const display = document.getElementById('cust-qty-display');
    if (display) display.textContent = newQty;
    const panel = componentCatalog.panels.find(p => p.id === customizerState.selections.panel);
    if (panel) {
        const kwEl = document.getElementById('cust-total-kw');
        if (kwEl) kwEl.textContent = ((panel.watts * newQty) / 1000).toFixed(2) + ' kW';
    }
    updateCustomizerPrice();
};

function attachAddonEvents() {
    document.querySelectorAll('.cust-addon-check').forEach(cb => {
        if (cb.disabled) return;
        cb.addEventListener('change', function() {
            const addonId = this.dataset.addonId;
            const label = this.closest('.cust-addon-item');
            if (this.checked) {
                if (!customizerState.selections.addons.includes(addonId)) {
                    customizerState.selections.addons.push(addonId);
                }
                if (label) label.classList.add('checked');
            } else {
                customizerState.selections.addons = customizerState.selections.addons.filter(id => id !== addonId);
                if (label) label.classList.remove('checked');
            }
            updateCustomizerPrice();
        });
    });
}

function attachPanelQtyEvents() {
    // Already using onclick, no need for additional attachment
}

function calcCustomizerTotal() {
    const sel = customizerState.selections;
    const inv = componentCatalog.inverters.find(x => x.id === sel.inverter);
    const panel = componentCatalog.panels.find(x => x.id === sel.panel);
    const bat = componentCatalog.batteries.find(x => x.id === sel.battery);
    const cable = componentCatalog.cables.find(x => x.id === sel.cable);
    const mount = componentCatalog.mounting.find(x => x.id === sel.mounting);
    const addonTotal = componentCatalog.addons
        .filter(x => sel.addons.includes(x.id))
        .reduce((sum, a) => sum + a.price, 0);

    return (inv ? inv.price : 0)
        + (panel ? panel.pricePerPanel * sel.panelQty : 0)
        + (bat ? bat.price : 0)
        + (cable ? cable.pricePerSet : 0)
        + (mount ? mount.pricePerSet : 0)
        + addonTotal
        + customizerState.installationFee;
}

function updateCustomizerPrice() {
    const origPrice = customizerState.basePrice;
    const newPrice = calcCustomizerTotal();
    const diff = newPrice - origPrice;

    const origEl = document.getElementById('cust-price-orig');
    const newEl = document.getElementById('cust-price-new');
    const diffEl = document.getElementById('cust-price-diff');

    if (origEl) origEl.textContent = '฿' + origPrice.toLocaleString();
    if (newEl) newEl.textContent = '฿' + newPrice.toLocaleString();
    if (diffEl) {
        const sign = diff >= 0 ? '+' : '';
        diffEl.textContent = sign + '฿' + diff.toLocaleString();
        diffEl.className = 'cust-price-diff ' + (diff > 0 ? 'up' : diff < 0 ? 'down' : 'same');
    }
}

window.generateQuotationPDF = function() {
    if (typeof window.jspdf === 'undefined' && typeof jsPDF === 'undefined') {
        alert('กำลังโหลด PDF generator กรุณารอสักครู่แล้วลองใหม่อีกครั้ง');
        return;
    }
    const { jsPDF } = window.jspdf || window;
    const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
    const t = translations[currentLang];
    const sel = customizerState.selections;

    const inv = componentCatalog.inverters.find(x => x.id === sel.inverter);
    const panel = componentCatalog.panels.find(x => x.id === sel.panel);
    const bat = componentCatalog.batteries.find(x => x.id === sel.battery);
    const cable = componentCatalog.cables.find(x => x.id === sel.cable);
    const mount = componentCatalog.mounting.find(x => x.id === sel.mounting);
    const addonItems = componentCatalog.addons.filter(x => sel.addons.includes(x.id));
    const totalPrice = calcCustomizerTotal();
    const today = new Date().toLocaleDateString('th-TH', { year: 'numeric', month: 'long', day: 'numeric' });

    // Header
    doc.setFontSize(20);
    doc.setTextColor(30, 64, 175);
    doc.text('TRISON SYSTEMS', 105, 20, { align: 'center' });
    doc.setFontSize(11);
    doc.setTextColor(100, 100, 100);
    doc.text('Solar Cell Solutions', 105, 27, { align: 'center' });
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.text('QUOTATION / ใบเสนอราคา', 105, 38, { align: 'center' });
    doc.setFontSize(10);
    doc.setTextColor(80, 80, 80);
    doc.text('Date / วันที่: ' + today, 14, 50);
    doc.text('Package: ' + customizerState.basePackageName, 14, 57);

    // Table
    const rows = [];
    if (inv) rows.push(['Inverter', inv.model, 1, 'เครื่อง', inv.price.toLocaleString()]);
    if (panel) rows.push(['Solar Panels', panel.model, sel.panelQty, 'แผง', (panel.pricePerPanel * sel.panelQty).toLocaleString()]);
    if (bat && bat.id !== 'none') rows.push(['Battery', bat.model, 1, 'ชุด', bat.price.toLocaleString()]);
    if (cable) rows.push(['DC Cable', cable.model, 1, 'ชุด', cable.pricePerSet.toLocaleString()]);
    if (mount) rows.push(['Mounting', mount.model, 1, 'ชุด', mount.pricePerSet.toLocaleString()]);
    addonItems.filter(a => a.price > 0).forEach(a => rows.push(['Add-on', a.name, 1, 'ชุด', a.price.toLocaleString()]));
    rows.push(['Installation', 'Installation + Permit Fee', 1, 'งาน', customizerState.installationFee.toLocaleString()]);

    if (doc.autoTable) {
        doc.autoTable({
            head: [['Item', 'Specification', 'Qty', 'Unit', 'Price (THB)']],
            body: rows,
            startY: 65,
            theme: 'striped',
            headStyles: { fillColor: [30, 64, 175], textColor: 255, fontStyle: 'bold' },
            footStyles: { fillColor: [240, 245, 255] },
            foot: [['', '', '', 'GRAND TOTAL', totalPrice.toLocaleString() + ' THB']],
            showFoot: 'lastPage',
        });
    } else {
        // Fallback simple table
        let y = 70;
        rows.forEach(row => {
            doc.text(row[0] + ': ' + row[1] + ' x' + row[2] + ' = ' + row[4] + ' THB', 14, y);
            y += 7;
        });
        doc.setFontSize(12);
        doc.text('GRAND TOTAL: ' + totalPrice.toLocaleString() + ' THB', 14, y + 5);
    }

    // Footer
    const finalY = doc.lastAutoTable ? doc.lastAutoTable.finalY + 15 : 200;
    doc.setFontSize(9);
    doc.setTextColor(100, 100, 100);
    doc.text('Note: This is an estimated quotation. Contact us for final pricing.', 14, finalY);
    doc.text('Tel: 02-xxx-xxxx | LINE: @TrisonSystems | www.trisonsystems.com', 14, finalY + 6);
    doc.text('2-Year Installation Warranty | Equipment warranty per brand specification', 14, finalY + 12);

    doc.save('Trison-Solar-Quotation-' + Date.now() + '.pdf');
};

window.sendToLineOA = function() {
    const sel = customizerState.selections;
    const inv = componentCatalog.inverters.find(x => x.id === sel.inverter);
    const panel = componentCatalog.panels.find(x => x.id === sel.panel);
    const bat = componentCatalog.batteries.find(x => x.id === sel.battery);
    const cable = componentCatalog.cables.find(x => x.id === sel.cable);
    const mount = componentCatalog.mounting.find(x => x.id === sel.mounting);
    const addonItems = componentCatalog.addons.filter(x => sel.addons.includes(x.id) && x.price > 0);
    const totalPrice = calcCustomizerTotal();
    const totalKw = panel ? ((panel.watts * sel.panelQty) / 1000).toFixed(2) : '-';

    const msg = `สวัสดีครับ/ค่ะ ต้องการสอบถามเพิ่มเติมเกี่ยวกับแพคเกจโซล่าเซลล์ที่ปรับแต่ง:\n\n` +
        `🏷 แพคเกจ: ${customizerState.basePackageName}\n` +
        `⚡ อินเวอร์เตอร์: ${inv ? inv.model : '-'}\n` +
        `☀️ แผงโซล่า: ${panel ? panel.model + ' × ' + sel.panelQty + ' แผง (' + totalKw + ' kW)' : '-'}\n` +
        `🔋 แบตเตอรี่: ${bat ? bat.model : '-'}\n` +
        `🔌 สายไฟ: ${cable ? cable.model : '-'}\n` +
        `🔩 ระบบราง: ${mount ? mount.model : '-'}\n` +
        (addonItems.length ? `➕ อุปกรณ์เสริม: ${addonItems.map(a => a.name).join(', ')}\n` : '') +
        `\n💰 ราคาประมาณ: ฿${totalPrice.toLocaleString()}\n\nกรุณาแนะนำและยืนยันราคาจริงด้วยครับ/ค่ะ`;

    // Get LINE OA URL from translation or fallback
    const lineOaId = translations.th.officeLine || '@trisonsystems';
    const lineUrl = `https://line.me/R/oaMessage/${encodeURIComponent(lineOaId)}/?text=${encodeURIComponent(msg)}`;
    window.open(lineUrl, '_blank');
};

/* ============================================================
   CMS: Component Catalog Management (Admin Only)
   ============================================================ */

let cmsCatalogEditState = {
    activeCategory: 'inverters',
    editingId: null
};

window.switchCatalogCategory = function(category) {
    cmsCatalogEditState.activeCategory = category;
    cmsCatalogEditState.editingId = null;
    document.querySelectorAll('.catalog-cat-tab').forEach(t => t.classList.remove('active'));
    const activeTab = document.getElementById(`cat-tab-${category}`);
    if (activeTab) activeTab.classList.add('active');
    renderCatalogTable();
    hideCatalogForm();
};

function renderCatalogTable() {
    const tbody = document.getElementById('catalog-table-body');
    const category = cmsCatalogEditState.activeCategory;
    const items = componentCatalog[category];
    if (!tbody || !items) return;

    tbody.innerHTML = items.map((item, idx) => {
        let nameCell = '';
        let specCell = '';
        let priceCell = '';

        if (category === 'inverters') {
            nameCell = `<strong>${item.brand}</strong> — ${item.model}`;
            specCell = item.specs;
            priceCell = '฿' + item.price.toLocaleString();
        } else if (category === 'panels') {
            nameCell = `<strong>${item.brand}</strong> — ${item.model}`;
            specCell = item.specs;
            priceCell = '฿' + item.pricePerPanel.toLocaleString() + '/แผง';
        } else if (category === 'batteries') {
            nameCell = `<strong>${item.brand}</strong> — ${item.model}`;
            specCell = item.specs;
            priceCell = item.price === 0 ? '฿0' : '฿' + item.price.toLocaleString();
        } else if (category === 'cables') {
            nameCell = item.model;
            specCell = item.specs;
            priceCell = '฿' + item.pricePerSet.toLocaleString() + '/ชุด';
        } else if (category === 'mounting') {
            nameCell = item.model;
            specCell = item.specs;
            priceCell = '฿' + item.pricePerSet.toLocaleString() + '/ชุด';
        } else if (category === 'addons') {
            nameCell = item.name;
            specCell = item.description;
            priceCell = item.price === 0 ? 'ฟรี' : '฿' + item.price.toLocaleString();
        }

        // Check if used in any package
        const usedInPkgs = Object.entries(packageBaseConfig)
            .filter(([, cfg]) => {
                if (category === 'inverters') return cfg.inverter === item.id;
                if (category === 'panels') return cfg.panel === item.id;
                if (category === 'batteries') return cfg.battery === item.id;
                if (category === 'cables') return cfg.cable === item.id;
                if (category === 'mounting') return cfg.mounting === item.id;
                if (category === 'addons') return cfg.addons && cfg.addons.includes(item.id);
                return false;
            }).length;

        return `<tr>
            <td>${nameCell}</td>
            <td class="catalog-spec-cell">${specCell}</td>
            <td>${priceCell}</td>
            <td>${usedInPkgs > 0 ? `<span class="catalog-used-badge">${usedInPkgs} แพคเกจ</span>` : '<span class="catalog-unused-badge">-</span>'}</td>
            <td class="catalog-actions">
                <button type="button" class="catalog-action-btn edit-btn" onclick="editCatalogItem('${category}','${item.id}')"><i class="fas fa-edit"></i></button>
                <button type="button" class="catalog-action-btn delete-btn ${usedInPkgs > 0 ? 'disabled' : ''}" onclick="deleteCatalogItem('${category}','${item.id}',${usedInPkgs})" title="${usedInPkgs > 0 ? 'ไม่สามารถลบได้ (ใช้งานอยู่ใน ' + usedInPkgs + ' แพคเกจ)' : 'ลบรายการ'}"><i class="fas fa-trash"></i></button>
            </td>
        </tr>`;
    }).join('');
}

window.showCatalogForm = function(mode) {
    const formBox = document.getElementById('catalog-form-box');
    const formTitle = document.getElementById('catalog-form-title');
    if (!formBox) return;

    cmsCatalogEditState.editingId = (mode === 'add') ? null : cmsCatalogEditState.editingId;
    if (formTitle) formTitle.textContent = mode === 'add' ? '+ เพิ่มอุปกรณ์ใหม่' : '✏️ แก้ไขอุปกรณ์';

    renderCatalogForm(mode);
    formBox.classList.add('open');
    formBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
};

function hideCatalogForm() {
    const formBox = document.getElementById('catalog-form-box');
    if (formBox) formBox.classList.remove('open');
    cmsCatalogEditState.editingId = null;
}

function renderCatalogForm(mode) {
    const category = cmsCatalogEditState.activeCategory;
    const formContent = document.getElementById('catalog-form-content');
    if (!formContent) return;

    const item = (mode === 'edit' && cmsCatalogEditState.editingId)
        ? componentCatalog[category].find(x => x.id === cmsCatalogEditState.editingId)
        : null;

    let html = '';
    const v = (field) => item ? (item[field] || '') : '';

    html += `<div class="catalog-form-grid">`;

    if (category === 'inverters') {
        html += `
            <div class="form-group"><label>ยี่ห้อ (Brand)</label><input type="text" id="cf-brand" value="${v('brand')}"></div>
            <div class="form-group"><label>รุ่น (Model)</label><input type="text" id="cf-model" value="${v('model')}"></div>
            <div class="form-group"><label>กำลัง kW</label><input type="number" id="cf-kw" value="${v('kw')}" min="1" step="0.1"></div>
            <div class="form-group"><label>เฟส (1 หรือ 3)</label><input type="number" id="cf-phase" value="${v('phase')}" min="1" max="3" step="2"></div>
            <div class="form-group"><label>ราคา (บาท)</label><input type="number" id="cf-price" value="${v('price')}" min="0"></div>
            <div class="form-group col-span-2"><label>Spec (รายละเอียดเพิ่มเติม)</label><input type="text" id="cf-specs" value="${v('specs')}"></div>
        `;
    } else if (category === 'panels') {
        html += `
            <div class="form-group"><label>ยี่ห้อ (Brand)</label><input type="text" id="cf-brand" value="${v('brand')}"></div>
            <div class="form-group"><label>รุ่น (Model)</label><input type="text" id="cf-model" value="${v('model')}"></div>
            <div class="form-group"><label>วัตต์ (Watts)</label><input type="number" id="cf-watts" value="${v('watts')}" min="1"></div>
            <div class="form-group"><label>ราคา/แผง (บาท)</label><input type="number" id="cf-pricePerPanel" value="${v('pricePerPanel')}" min="0"></div>
            <div class="form-group col-span-2"><label>Spec</label><input type="text" id="cf-specs" value="${v('specs')}"></div>
        `;
    } else if (category === 'batteries') {
        html += `
            <div class="form-group"><label>ยี่ห้อ (Brand)</label><input type="text" id="cf-brand" value="${v('brand')}"></div>
            <div class="form-group"><label>รุ่น (Model)</label><input type="text" id="cf-model" value="${v('model')}"></div>
            <div class="form-group"><label>ความจุ kWh</label><input type="number" id="cf-kwh" value="${v('kwh')}" min="0" step="0.5"></div>
            <div class="form-group"><label>ราคา (บาท)</label><input type="number" id="cf-price" value="${v('price')}" min="0"></div>
            <div class="form-group col-span-2"><label>Spec</label><input type="text" id="cf-specs" value="${v('specs')}"></div>
        `;
    } else if (category === 'cables') {
        html += `
            <div class="form-group"><label>ชื่อรุ่น (Model)</label><input type="text" id="cf-model" value="${v('model')}"></div>
            <div class="form-group"><label>ขนาด (Size)</label><input type="text" id="cf-size" value="${v('size')}" placeholder="เช่น 4mm², 6mm²"></div>
            <div class="form-group"><label>ราคา/ชุด (บาท)</label><input type="number" id="cf-pricePerSet" value="${v('pricePerSet')}" min="0"></div>
            <div class="form-group col-span-2"><label>Spec</label><input type="text" id="cf-specs" value="${v('specs')}"></div>
        `;
    } else if (category === 'mounting') {
        html += `
            <div class="form-group"><label>ชื่อรุ่น (Model)</label><input type="text" id="cf-model" value="${v('model')}"></div>
            <div class="form-group"><label>วัสดุ (Material)</label><input type="text" id="cf-material" value="${v('material')}"></div>
            <div class="form-group"><label>ราคา/ชุด (บาท)</label><input type="number" id="cf-pricePerSet" value="${v('pricePerSet')}" min="0"></div>
            <div class="form-group col-span-2"><label>Spec</label><input type="text" id="cf-specs" value="${v('specs')}"></div>
        `;
    } else if (category === 'addons') {
        html += `
            <div class="form-group"><label>ชื่ออุปกรณ์</label><input type="text" id="cf-name" value="${v('name')}"></div>
            <div class="form-group"><label>ราคา (บาท)</label><input type="number" id="cf-price" value="${v('price')}" min="0"></div>
            <div class="form-group col-span-2"><label>คำอธิบาย (Description)</label><input type="text" id="cf-description" value="${v('description')}"></div>
        `;
    }

    html += `</div>
        <div class="catalog-form-actions">
            <button type="button" class="btn btn-primary" onclick="saveCatalogItem()">
                <i class="fas fa-save"></i> บันทึก
            </button>
            <button type="button" class="btn btn-secondary" onclick="hideCatalogForm()">
                <i class="fas fa-times"></i> ยกเลิก
            </button>
        </div>
    `;
    formContent.innerHTML = html;
}

window.editCatalogItem = function(category, itemId) {
    cmsCatalogEditState.activeCategory = category;
    cmsCatalogEditState.editingId = itemId;
    showCatalogForm('edit');
};

window.deleteCatalogItem = function(category, itemId, usedCount) {
    if (usedCount > 0) {
        alert(`ไม่สามารถลบได้ เนื่องจากอุปกรณ์นี้ถูกใช้งานใน ${usedCount} แพคเกจ\nกรุณาเปลี่ยนอุปกรณ์ในแพคเกจก่อน`);
        return;
    }
    if (!confirm('ยืนยันการลบอุปกรณ์นี้?')) return;
    componentCatalog[category] = componentCatalog[category].filter(x => x.id !== itemId);
    saveCatalogToStorage();
    renderCatalogTable();
};

window.saveCatalogItem = function() {
    const category = cmsCatalogEditState.activeCategory;
    const isEdit = !!cmsCatalogEditState.editingId;
    const gv = (id) => { const el = document.getElementById(id); return el ? el.value.trim() : ''; };
    const gn = (id) => { const el = document.getElementById(id); return el ? parseFloat(el.value) || 0 : 0; };

    let newItem = {};

    if (category === 'inverters') {
        const brand = gv('cf-brand'); const model = gv('cf-model');
        if (!brand || !model) { alert('กรุณากรอกยี่ห้อและรุ่น'); return; }
        newItem = { id: isEdit ? cmsCatalogEditState.editingId : 'inv-' + Date.now(), brand, model, kw: gn('cf-kw'), phase: gn('cf-phase') || 1, price: gn('cf-price'), specs: gv('cf-specs') };
    } else if (category === 'panels') {
        const brand = gv('cf-brand'); const model = gv('cf-model');
        if (!brand || !model) { alert('กรุณากรอกยี่ห้อและรุ่น'); return; }
        newItem = { id: isEdit ? cmsCatalogEditState.editingId : 'panel-' + Date.now(), brand, model, watts: gn('cf-watts'), pricePerPanel: gn('cf-pricePerPanel'), specs: gv('cf-specs') };
    } else if (category === 'batteries') {
        const brand = gv('cf-brand'); const model = gv('cf-model');
        if (!brand || !model) { alert('กรุณากรอกยี่ห้อและรุ่น'); return; }
        newItem = { id: isEdit ? cmsCatalogEditState.editingId : 'bat-' + Date.now(), brand, model, kwh: gn('cf-kwh'), price: gn('cf-price'), specs: gv('cf-specs') };
    } else if (category === 'cables') {
        const model = gv('cf-model');
        if (!model) { alert('กรุณากรอกชื่อรุ่น'); return; }
        newItem = { id: isEdit ? cmsCatalogEditState.editingId : 'cable-' + Date.now(), model, size: gv('cf-size'), pricePerSet: gn('cf-pricePerSet'), specs: gv('cf-specs') };
    } else if (category === 'mounting') {
        const model = gv('cf-model');
        if (!model) { alert('กรุณากรอกชื่อรุ่น'); return; }
        newItem = { id: isEdit ? cmsCatalogEditState.editingId : 'mount-' + Date.now(), model, material: gv('cf-material'), pricePerSet: gn('cf-pricePerSet'), specs: gv('cf-specs') };
    } else if (category === 'addons') {
        const name = gv('cf-name');
        if (!name) { alert('กรุณากรอกชื่ออุปกรณ์'); return; }
        newItem = { id: isEdit ? cmsCatalogEditState.editingId : 'addon-' + Date.now(), name, price: gn('cf-price'), description: gv('cf-description') };
    }

    if (isEdit) {
        const idx = componentCatalog[category].findIndex(x => x.id === cmsCatalogEditState.editingId);
        if (idx >= 0) componentCatalog[category][idx] = newItem;
    } else {
        componentCatalog[category].push(newItem);
    }

    saveCatalogToStorage();
    renderCatalogTable();
    hideCatalogForm();
    // Update package editor dropdowns if open
    refreshPackageEditorDropdowns();
};

function saveCatalogToStorage() {
    localStorage.setItem('trison_component_catalog', JSON.stringify(componentCatalog));
}

/* ============================================================
   CMS: Package Config Editor V2 (uses dropdowns from catalog)
   ============================================================ */

let cmsPackageEditorState = {
    activePackageId: 'pkg-randy-5kw'
};

window.loadPackageEditorV2 = function(pkgId) {
    cmsPackageEditorState.activePackageId = pkgId;
    const cfg = packageBaseConfig[pkgId] || {};

    // Set dropdown values
    setSelectVal('pkg-ed-inverter', cfg.inverter);
    setSelectVal('pkg-ed-panel', cfg.panel);
    setInputVal('pkg-ed-panel-qty', cfg.panelQty || 1);
    setSelectVal('pkg-ed-battery', cfg.battery);
    setSelectVal('pkg-ed-cable', cfg.cable);
    setSelectVal('pkg-ed-mounting', cfg.mounting);
    setInputVal('pkg-ed-install-fee', cfg.installationFee || 0);

    // Set addons checkboxes
    document.querySelectorAll('.pkg-ed-addon-check').forEach(cb => {
        cb.checked = cfg.addons && cfg.addons.includes(cb.dataset.addonId);
    });

    // Load multilang fields (same as before)
    const mapping = {
        'pkg-randy-5kw': 'Randy5kw', 'pkg-deye-5kw-3p': 'Deye5kw3p',
        'pkg-deye-6kw-aiko': 'Deye6kwAiko', 'pkg-deye-6kw-logi': 'Deye6kwLogi',
        'pkg-huawei-5kw': 'Huawei5kw', 'pkg-huawei-10kw': 'Huawei10kw',
        'pkg-huawei-15kw': 'Huawei15kw', 'pkg-huawei-20kw': 'Huawei20kw'
    };
    const thKey = mapping[pkgId];
    if (thKey) {
        ['th', 'en', 'zh'].forEach(l => {
            setInputVal(`pkg-ed-name-${l}`, translations[l][`pack${thKey}Name`] || '');
            setInputVal(`pkg-ed-desc-${l}`, translations[l][`pack${thKey}Desc`] || '');
            setInputVal(`pkg-ed-saving-${l}`, translations[l][`pack${thKey}SavingSpec`] || '');
            setInputVal(`pkg-ed-best-${l}`, translations[l][`pack${thKey}BestSpec`] || '');
        });
    }

    // Set display price
    setInputVal('pkg-ed-display-price', translations.th[`pack${thKey}Price`] || '');

    recalcPackageEditorPrice();
};

window.recalcPackageEditorPrice = function() {
    const inv = getSelectVal('pkg-ed-inverter');
    const panelId = getSelectVal('pkg-ed-panel');
    const panelQty = parseInt(getInputVal('pkg-ed-panel-qty')) || 0;
    const batId = getSelectVal('pkg-ed-battery');
    const cableId = getSelectVal('pkg-ed-cable');
    const mountId = getSelectVal('pkg-ed-mounting');
    const installFee = parseInt(getInputVal('pkg-ed-install-fee')) || 0;

    const invItem = componentCatalog.inverters.find(x => x.id === inv);
    const panelItem = componentCatalog.panels.find(x => x.id === panelId);
    const batItem = componentCatalog.batteries.find(x => x.id === batId);
    const cableItem = componentCatalog.cables.find(x => x.id === cableId);
    const mountItem = componentCatalog.mounting.find(x => x.id === mountId);

    const addonTotal = componentCatalog.addons
        .filter(a => { const cb = document.querySelector(`.pkg-ed-addon-check[data-addon-id="${a.id}"]`); return cb && cb.checked; })
        .reduce((sum, a) => sum + a.price, 0);

    const total = (invItem ? invItem.price : 0)
        + (panelItem ? panelItem.pricePerPanel * panelQty : 0)
        + (batItem ? batItem.price : 0)
        + (cableItem ? cableItem.pricePerSet : 0)
        + (mountItem ? mountItem.pricePerSet : 0)
        + addonTotal + installFee;

    const calcPriceEl = document.getElementById('pkg-ed-calc-price');
    if (calcPriceEl) calcPriceEl.textContent = '฿' + total.toLocaleString();

    // Auto-fill display price if empty
    const displayPriceEl = document.getElementById('pkg-ed-display-price');
    if (displayPriceEl && !displayPriceEl.dataset.manuallySet) {
        displayPriceEl.value = '฿' + total.toLocaleString();
    }
};

window.savePackageEditorV2 = function() {
    const pkgId = cmsPackageEditorState.activePackageId;
    const mapping = {
        'pkg-randy-5kw': 'Randy5kw', 'pkg-deye-5kw-3p': 'Deye5kw3p',
        'pkg-deye-6kw-aiko': 'Deye6kwAiko', 'pkg-deye-6kw-logi': 'Deye6kwLogi',
        'pkg-huawei-5kw': 'Huawei5kw', 'pkg-huawei-10kw': 'Huawei10kw',
        'pkg-huawei-15kw': 'Huawei15kw', 'pkg-huawei-20kw': 'Huawei20kw'
    };
    const thKey = mapping[pkgId];

    // Save component config
    const addons = [];
    document.querySelectorAll('.pkg-ed-addon-check').forEach(cb => {
        if (cb.checked) addons.push(cb.dataset.addonId);
    });

    packageBaseConfig[pkgId] = {
        inverter: getSelectVal('pkg-ed-inverter'),
        panel: getSelectVal('pkg-ed-panel'),
        panelQty: parseInt(getInputVal('pkg-ed-panel-qty')) || 8,
        battery: getSelectVal('pkg-ed-battery'),
        cable: getSelectVal('pkg-ed-cable'),
        mounting: getSelectVal('pkg-ed-mounting'),
        addons: addons,
        installationFee: parseInt(getInputVal('pkg-ed-install-fee')) || 0
    };

    // Save multilang fields
    if (thKey) {
        const displayPrice = getInputVal('pkg-ed-display-price');
        ['th', 'en', 'zh'].forEach(l => {
            translations[l][`pack${thKey}Price`] = displayPrice;
            translations[l][`pack${thKey}Name`] = getInputVal(`pkg-ed-name-${l}`);
            translations[l][`pack${thKey}Desc`] = getInputVal(`pkg-ed-desc-${l}`);
            translations[l][`pack${thKey}SavingSpec`] = getInputVal(`pkg-ed-saving-${l}`);
            translations[l][`pack${thKey}BestSpec`] = getInputVal(`pkg-ed-best-${l}`);
        });
        // Also update inverter/panels/battery spec text in translations for backward compat
        const inv = componentCatalog.inverters.find(x => x.id === packageBaseConfig[pkgId].inverter);
        const panel = componentCatalog.panels.find(x => x.id === packageBaseConfig[pkgId].panel);
        const bat = componentCatalog.batteries.find(x => x.id === packageBaseConfig[pkgId].battery);
        if (inv) { ['th','en','zh'].forEach(l => { translations[l][`packInverterVal_${pkgId}`] = inv.model; }); }
        if (panel) { ['th','en','zh'].forEach(l => { translations[l][`packPanelsVal_${pkgId}`] = panel.brand + ' ' + panel.watts + 'W × ' + packageBaseConfig[pkgId].panelQty + ' แผง'; }); }
        if (bat) { ['th','en','zh'].forEach(l => { translations[l][`packBatteryVal_${pkgId}`] = bat.id === 'none' ? 'ไม่มี (On-Grid)' : bat.model; }); }
    }

    localStorage.setItem('trison_package_configs', JSON.stringify(packageBaseConfig));
    localStorage.setItem('trison_translations', JSON.stringify(translations));

    // Live update page
    setLanguage(currentLang);

    // Update card specs directly
    const packagesList = ['pkg-randy-5kw','pkg-deye-5kw-3p','pkg-deye-6kw-aiko','pkg-deye-6kw-logi','pkg-huawei-5kw','pkg-huawei-10kw','pkg-huawei-15kw','pkg-huawei-20kw'];
    packagesList.forEach(pId => {
        const card = document.getElementById(pId);
        if (!card) return;
        const specItems = card.querySelectorAll('.package-specs li span');
        specItems.forEach(span => {
            const text = span.textContent;
            if (text.includes('อินเวอร์เตอร์') || text.includes('Inverter') || text.includes('逆变器')) {
                const val = translations[currentLang][`packInverterVal_${pId}`];
                if (val) span.innerHTML = `<strong>${translations[currentLang].packInverter || 'อินเวอร์เตอร์'}</strong>: ${val}`;
            } else if (text.includes('Tier 1')) {
                const val = translations[currentLang][`packPanelsVal_${pId}`];
                if (val) span.innerHTML = `<strong>${translations[currentLang].packPanels || 'แผง Tier 1'}</strong>: ${val}`;
            } else if (text.includes('แบตเตอรี่') || text.includes('Battery') || text.includes('储能电池')) {
                const val = translations[currentLang][`packBatteryVal_${pId}`];
                if (val) span.innerHTML = `<strong>${translations[currentLang].packBattery || 'แบตเตอรี่'}</strong>: ${val}`;
            }
        });
    });

    // Show success
    const saveNoti = document.getElementById('cms-save-notification');
    if (saveNoti) {
        saveNoti.style.display = 'flex';
        setTimeout(() => { saveNoti.style.display = 'none'; }, 3000);
    }
};

function refreshPackageEditorDropdowns() {
    // Rebuild select options in package editor if visible
    ['pkg-ed-inverter','pkg-ed-panel','pkg-ed-battery','pkg-ed-cable','pkg-ed-mounting'].forEach(selId => {
        const sel = document.getElementById(selId);
        if (!sel) return;
        const currentVal = sel.value;
        const category = {
            'pkg-ed-inverter': 'inverters',
            'pkg-ed-panel': 'panels',
            'pkg-ed-battery': 'batteries',
            'pkg-ed-cable': 'cables',
            'pkg-ed-mounting': 'mounting'
        }[selId];
        sel.innerHTML = buildCatalogSelectOptions(category);
        sel.value = currentVal;
    });
}

function buildCatalogSelectOptions(category) {
    const items = componentCatalog[category];
    if (!items) return '';
    return items.map(item => {
        let label = '';
        if (category === 'inverters') label = `${item.brand} ${item.model} — ฿${item.price.toLocaleString()}`;
        else if (category === 'panels') label = `${item.brand} ${item.model} — ฿${item.pricePerPanel.toLocaleString()}/แผง`;
        else if (category === 'batteries') label = `${item.brand} ${item.model} — ${item.price === 0 ? 'ฟรี' : '฿' + item.price.toLocaleString()}`;
        else if (category === 'cables') label = `${item.model} — ฿${item.pricePerSet.toLocaleString()}/ชุด`;
        else if (category === 'mounting') label = `${item.model} — ฿${item.pricePerSet.toLocaleString()}/ชุด`;
        return `<option value="${item.id}">${label}</option>`;
    }).join('');
}

window.initComponentCatalogTab = function() {
    renderCatalogTable();
};

// Utility helpers
function setSelectVal(id, val) { const el = document.getElementById(id); if (el && val) el.value = val; }
function getSelectVal(id) { const el = document.getElementById(id); return el ? el.value : ''; }
function setInputVal(id, val) { const el = document.getElementById(id); if (el !== null && val !== undefined) el.value = val; }
function getInputVal(id) { const el = document.getElementById(id); return el ? el.value : ''; }

/* ============================================================
   CMS: Package Editor V2 — Sublang switcher + Initializer
   ============================================================ */

window.switchPkgV2Sublang = function(lang) {
    // Update buttons
    document.querySelectorAll('.tabs-sublang .sublang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    const activeBtn = document.querySelector(`.tabs-sublang .sublang-btn[onclick*="'${lang}'"]`);
    if (activeBtn) activeBtn.classList.add('active');

    // Toggle panes
    ['th', 'en', 'zh'].forEach(l => {
        const pane = document.getElementById(`sublang-v2-pkg-${l}`);
        if (pane) {
            pane.classList.toggle('active', l === lang);
        }
    });
};

// Populate package editor V2 dropdowns from componentCatalog
function initPackageEditorV2() {
    // Build select options
    const selMapping = [
        { id: 'pkg-ed-inverter', cat: 'inverters' },
        { id: 'pkg-ed-panel', cat: 'panels' },
        { id: 'pkg-ed-battery', cat: 'batteries' },
        { id: 'pkg-ed-cable', cat: 'cables' },
        { id: 'pkg-ed-mounting', cat: 'mounting' },
    ];
    selMapping.forEach(({ id, cat }) => {
        const sel = document.getElementById(id);
        if (sel) sel.innerHTML = buildCatalogSelectOptions(cat);
    });

    // Build addon checkboxes
    const addonsContainer = document.querySelector('.pkg-ed-addons');
    if (addonsContainer) {
        addonsContainer.innerHTML = componentCatalog.addons.map(a => `
            <label class="pkg-ed-addon-item">
                <input type="checkbox" class="pkg-ed-addon-check" data-addon-id="${a.id}">
                <span>${a.name}${a.price > 0 ? ' (+฿' + a.price.toLocaleString() + ')' : ' (ฟรี)'}</span>
            </label>
        `).join('');
        // Re-attach recalc on change
        addonsContainer.querySelectorAll('.pkg-ed-addon-check').forEach(cb => {
            cb.addEventListener('change', recalcPackageEditorPrice);
        });
    }

    // Load first package by default
    const selector = document.getElementById('cms-pkg-v2-selector');
    if (selector) {
        loadPackageEditorV2(selector.value);
    }
}

// Override switchAdminTab to init editors when tabs open
const _origSwitchAdminTab = window.switchAdminTab;
window.switchAdminTab = function(tabName) {
    _origSwitchAdminTab(tabName);
    if (tabName === 'packages') {
        // Small delay to allow DOM to render
        setTimeout(initPackageEditorV2, 50);
    }
    if (tabName === 'components') {
        setTimeout(initComponentCatalogTab, 50);
    }
};

