"use client";

interface ServiceCardProps {
  title: string;
  description: string;
}

const ServiceCard = ({ title, description }: ServiceCardProps) => (
  <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
    <h3 className="text-xl font-semibold mb-3 text-blue-900">{title}</h3>
    <p className="text-slate-500">{description}</p>
  </div>
);

export default function ServicesSection() {
  const services = [
    {
      title: "งานก่อสร้างที่อยู่อาศัย",
      description: "บ้านเดี่ยว ทาวน์โฮม ต่อเติม รีโนเวท วางระบบครบ จบด้วยมาตรฐานงานช่างมืออาชีพ",
    },
    {
      title: "งานก่อสร้างเชิงพาณิชย์",
      description: "อาคารสำนักงาน ร้านค้า โกดัง โรงงาน เน้นความปลอดภัย การใช้งานจริง และควบคุมต้นทุนชัดเจน",
    },
    {
      title: "รีโนเวทและปรับปรุง",
      description: "ปรับปรุงโครงสร้างและงานตกแต่งให้ทันสมัย เพิ่มมูลค่าอาคาร โดยคุมคุณภาพและระยะเวลา",
    },
  ];

  return (
    <section className="py-16 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">ความเชี่ยวชาญของเรา</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
