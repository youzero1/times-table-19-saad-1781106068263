import { clsx } from 'clsx';

export default function TableOf19() {
  const rows = Array.from({ length: 20 }, (_, i) => ({
    multiplier: i + 1,
    result: 19 * (i + 1),
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-sm">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-6 text-center">
          <h1 className="text-3xl font-extrabold text-white tracking-wide">Table of 19</h1>
          <p className="text-indigo-200 text-sm mt-1">Multiplication Chart</p>
        </div>

        {/* Table */}
        <div className="divide-y divide-gray-100">
          {rows.map(({ multiplier, result }) => (
            <div
              key={multiplier}
              className={clsx(
                'flex items-center justify-between px-8 py-3 transition-colors hover:bg-indigo-50',
                multiplier % 2 === 0 ? 'bg-gray-50' : 'bg-white'
              )}
            >
              <span className="text-gray-600 font-medium text-base w-24">
                19 &times; {multiplier}
              </span>
              <span className="text-gray-400 text-lg font-light">=</span>
              <span className="text-indigo-700 font-extrabold text-xl w-16 text-right">
                {result}
              </span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-3 text-center">
          <p className="text-indigo-200 text-xs">19 × 1 to 19 × 20</p>
        </div>
      </div>
    </div>
  );
}
