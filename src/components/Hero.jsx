import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';

// ✍️ قم بتعديل نص الرسالة هنا فقط وسيتم تحديثها في كل المكان تلقائياً
const MESSAGE_TEXT = "معرفش انت هتشوف الكلام دا ولا لا ولا هتشوفه امتي بس اظن دي فرصه اني اتكلم شويه، وحشتني يحبيبي وحشتني اويي وحشني حازم حبيبي اللي حبيته اللي كان ما بيصدق يلاقي شويه فاضي فبهم علشان يرن عليا ويسمع صوتي حازم حبيبي اللي كان بيرن علشان كل شويه يطمن اني كويسه، كلت ولا لا او يشوفني انا فين ويطمن عليا، وحشني حازم حبيبي اللي عمره ما نيمني زعلانه عمره ما كسر خاطري فمره او وجعني كده مش بقولك كده علشان تزعل او تضايق ان نتخانق او اي حاجه والله بس حسيت اني عاوزه اتكلم مش اكتر، عارف المشكله ف ايه؟  ان انا فعلاً مليش غيرك فالدنيا انت اهلي وصحابي وحبايبي وكل حاجة بالنسبالي، بس اني احس انك بتتهرب مني وانك بتبعدني قصد بتصرفاتك ف لا عاوز تبعد ابعد بس هتكون دي اكبر خساره فحياتك، انت مش فاهم بجد كلمتك ليا انهارده عملت فيا ايه وخلتني عيطت قد ايه بجددد انا كنت قاعده طول الدرس بعيط ولما جيتلك كنت بعيط مهدتش غير فالشويه اللي جبت فيهم الاكل وبعدين شوفت التليفون وجيت وبعدين الدرس التاني ولما طلعت وشوفتك من بعيد وانت واقف افتكرت وعيطت تاني على عياطي من المستر واخدتها لحد البيت عياط، انت بجد مش فاهم انت وجعتني ازاي والله، احيه يحازم انت كسرتني كسره من جوا الله اعلم هتتصلح ولا لا اديني هحاول انسي بس المشكله اني عمري ما نسيت حاجه ليك او تخصك انت بالذات مهما كانت حلوه او وحشه. يمكن كلامي هيضايقك او ممكن يخليك تزعق! معرفش بس اتمني ميحصلش دا يعني اكيد وان اللي يحصل يكون عكس وتوقعاتي ويحسسني بحاجه من اللي بيضيعو من علاقتنا واحده واحده. مكنتش اتمني نوصل للتغيير دا كان نفسي نتغير للاحسن انت بتبعد وانا مبفتش عارفه اعمل ايه المشكله ان مهما نتكلم فالشات عمري ما هنلاقي حل ولا هيكون كلامنا ليه فايده او هيصلح حاجه علشان فالشات! انا بقالي شهر بقولك اني عاوزه اتكلم وعاوزه انزل وكل مره بيحصل حاجه ومش بننزل وانا بجد تعبت والله مبقتش عارفه اعمل حاجه ولو انت ملاحظ يعني اني بقيت سايباك براحتك لما سالتك امبارح انت بتحبني وعاوزني ولا لا كنت مستنيه اجابه تطمني علشان بجد بقيت حاسه انك مش عاوزني وانك مبقتش تحبني ودا مش بإيدي يعني اني احسه انت اللي وصلتني لكده، انا عاوزه اقولك بس ان اي فعل بيصدر مني مش بيكون غير رده فعلك على كلامك وافعالك انا بقالي تلت ايام مش بعرف انام واخر حاجه كلتها كانت الشاورما والتويست مليش نفس اني اكل ولا اذاكر ولا اعمل اي حاجه حياتي اتغيرت وانا اتغيرت وانت اتغيرت وكل حاجه بينا اتغيرت بس صدقني أكتر حاجه اتغيرت وسط كل دا هو انت مش بقولك كده علشان تقولي انتي مش حاسه بحاجه ومش شايفه اللي انا فيه وكل دا، طل هل انتي قولتلي حاجه او حكيتلي حاجه علشان اعرف انت فيك ايه؟ هل عرفتني حاجه عن حياتك من شهر؟ هل انت تعرف اي حاجه عني او اي اللي بيحصل او عن تعبي بقالك اكتر من شهر؟ اي علاقه بين اتنين مش بتكون معتمده غير على الراجل والبنت مش بتكون الا رده فعل لافعاله هو كان كويس هي هتبقي كويسه هو اتعامل كويس وكان بيعرفها تفاصيلك كلها هي هتعمل كده واكتر لو كان مخليها الاولويه فحياته هي هتخليه اولويه فحياتها، الاعتماد كله على الراجل مش البنت. مكنتش بقولك كلمني ال24ساعه ولا كنت بقولك رن عليا كل خمس ثواني انا بس مكنتش عاوزه احس اني لوحدي فعلاقتنا مكنتش عاوزه احس اني انا بس اللي بحاول اصلح كل حاجه فعلاقتنا مكنتش عاوزه احس انك بقيت بعيد عندي وبتبعد اكتر انت اللي خليتني احس كل دا انت اللي وصلتني اني احس اني لوحدي كنت يومين تبقي كويس وكل حاجه كويسه وخمسه يعتبر مبنتكلمش، طب وبعدين؟ اكيد مش هنفضل كده لو فضلنا كده يبقي حرام عليا وعليك يا نتكلم ونشوف حل لكل الغبث اللي بيحصل دا يا (اقسم بالله ما عارفه اقولها) وانت عارف بقا الحل التاني. انا بحبك يحازم وانت عارف كويس انت بالنسبالي ايه لما بنزعل من بعض لما بتغيب عني انا بجد ببقي زي التايهه مش بحب نزعل من بعض ومش بحب نبعد ومش بحب اي حاجه تخلي كلامنا متكرهبب او قليل وبجد انا زعلانه منك اويي ومضايقهه اويي منك وانت عارف اني مش بحب ازعل منك انت بالذات وانه عادي مش بيفرقلي ازعل من اي حد ولا فارق معايا خد بس انت غير انت الوحيد اللي فارق معايا فالدنيا كلها وبجد مش بحب ازعل منك، عارفه انك تعبان ومضغوط من كل اللي بيحصل بس دا مش معناه انك تسكت وتبقي لوحدك احنا هِنا علشان نبقي سند لبعض ونستقوي ببعض وبوجودنا سوا كل حاجه هتعدي زي ما انت بتبقي بتخليني احكيي وبتزعل لو خبيت لازم انت كمان تحكي يحبيبي وانت عارف كويس اني هسمعك بكل شغف وحب انا مليش فالدنيا غيرك ومش عاوزه من الدنيا غير انك تكون مبسوط وكويس وان ربنا يديمك ليا وميحرمنيش منك ولا من وجودك ابدا. انا بحبك بجد بحبك اويي والله🫂.";

const Hero = ({ onNext }) => {
  const [displayedText, setDisplayedText] = useState("");

  // 1. تثبيت القلوب المتحركة لتجنب إنشائها عند كل إعاجة رسم (Re-render)
  const hearts = useMemo(() => {
    return [...Array(25)].map((_, i) => ({
      id: i,
      duration: Math.random() * 6 + 7,
      delay: Math.random() * 5,
      size: Math.random() * 18 + 12,
      left: Math.random() * 100,
    }));
  }, []);

  // 2. تصحيح تأثير آلة الكاتبة (Typewriter Effect)
  useEffect(() => {
    let currentIndex = 0;
    setDisplayedText("");

    const interval = setInterval(() => {
      if (currentIndex < MESSAGE_TEXT.length) {
        setDisplayedText(MESSAGE_TEXT.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 45);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-[#1a0007] flex items-center justify-center overflow-hidden font-sans p-4" dir="rtl">
      
      {/* إضاءات الخلفية الساحرة */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rose-600/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-[400px] h-[400px] bg-pink-600/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-10 -left-20 w-[400px] h-[400px] bg-purple-900/20 rounded-full blur-[130px] pointer-events-none" />

      {/* خلفية القلوب المتحركة المحسنة */}
      <div className="absolute inset-0 opacity-40 pointer-events-none overflow-hidden">
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            initial={{ y: "105vh", x: 0, opacity: 0, scale: 0.5 }}
            animate={{ 
              y: "-10vh", 
              x: [0, 20, -20, 0],
              opacity: [0, 0.9, 0.9, 0],
              scale: [0.5, 1, 0.8, 0.5]
            }}
            transition={{
              duration: heart.duration,
              repeat: Infinity,
              delay: heart.delay,
              ease: "easeInOut",
            }}
            className="absolute text-pink-500 drop-shadow-[0_0_12px_rgba(244,63,94,0.8)]"
            style={{
              left: `${heart.left}%`,
              fontSize: `${heart.size}px`,
            }}
          >
            ♥
          </motion.div>
        ))}
      </div>

      {/* الكارت الزجاجي الرئيسي */}
      <motion.div
        initial={{ scale: 0.85, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-[500px] bg-gradient-to-b from-white/10 via-white/5 to-black/40 backdrop-blur-3xl border border-white/20 rounded-[3rem] shadow-[0_30px_100px_rgba(0,0,0,0.8)] p-6 md:p-10 flex flex-col items-center justify-between min-h-[540px] max-h-[85vh] overflow-y-auto group"
      >
        <div className="absolute -top-20 inset-x-0 h-40 bg-gradient-to-b from-rose-500/30 to-transparent blur-2xl pointer-events-none" />

        {/* أيقونة القلب النابض */}
        <div className="relative mt-2 mb-6 shrink-0">
          <motion.div 
            animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-full bg-rose-500 blur-xl"
          />
          
          <motion.div 
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-20 h-20 rounded-3xl bg-gradient-to-tr from-rose-600 via-pink-500 to-rose-400 p-[1px] shadow-[0_0_30px_rgba(244,63,94,0.5)] flex items-center justify-center backdrop-blur-md"
          >
            <div className="w-full h-full bg-[#1e0208]/80 rounded-[23px] flex items-center justify-center">
              <svg 
                className="w-10 h-10 text-rose-500 drop-shadow-[0_0_10px_rgba(244,63,94,0.8)]" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
          </motion.div>
        </div>

        {/* النص المكتوب */}
        <div className="w-full text-center my-auto px-2 py-2">
          <p className="text-white text-base md:text-lg font-light leading-relaxed tracking-wide whitespace-pre-line text-balance drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
            {displayedText}
            <span className="inline-block w-1 h-5 mr-1 bg-rose-400 rounded-full animate-pulse align-middle shadow-[0_0_10px_#f43f5e]" />
          </p>
        </div>

        {/* زر الاستكمال */}
        {onNext && (
          <motion.button
            whileHover={{ scale: 1.03, boxShadow: "0 0 35px rgba(244,63,94,0.6)" }}
            whileTap={{ scale: 0.97 }}
            onClick={onNext}
            className="mt-6 shrink-0 px-10 py-3.5 rounded-full bg-gradient-to-r from-rose-600 via-pink-600 to-rose-500 text-white font-medium text-sm tracking-wider shadow-[0_10px_30px_rgba(244,63,94,0.3)] border border-pink-400/30 transition-all duration-300"
          >
            التالي ♥
          </motion.button>
        )}

      </motion.div>
    </div>
  );
};

export default Hero;