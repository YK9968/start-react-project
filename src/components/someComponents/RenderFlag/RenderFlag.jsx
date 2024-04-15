export default function RenderFlag({ langData }) {
  const flags = {
    uk: "https://cdn.icon-icons.com/icons2/230/PNG/256/Ukraine_UA_UKR_804_Flag1_26096.png",
    en: "https://cdn-icons-png.flaticon.com/128/5111/5111640.png",
    pl: "https://cdn.icon-icons.com/icons2/97/PNG/256/poland_flags_flag_17053.png",
  };

  return (
    <div>
      <img src={flags[langData]} width={35} />
    </div>
  );
}
