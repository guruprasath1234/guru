export default function Achievements() {
  return (
    <section className="py-24">
      <h2 className="text-4xl font-bold mb-10">
        Achievements
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gray-900 p-6 rounded-xl">
          700+ Problems Solved
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          SIH Grand Finalist
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          Hackathon Organizer
        </div>
      </div>
    </section>
  );
}