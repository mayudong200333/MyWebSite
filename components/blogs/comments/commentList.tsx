const messages = [
    {
      id: 1,
      subject: 'Velit placeat sit ducimus non sed',
      sender: 'Gloria Roberston',
      time: '1d ago',
      datetime: '2021-01-27T16:35',
      preview:
        'Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.',
    },
    {
        id: 1,
        subject: 'Velit placeat sit ducimus non sed',
        sender: 'Gloria Roberston',
        time: '1d ago',
        datetime: '2021-01-27T16:35',
        preview:
          'Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.',
      },];

export default function CommentList() {
    return (
        <div role="list" className="divide-y divide-gray-200">
            {messages.map((message) => (
                <div
                    key={message.id}
                    className="relative bg-white py-5 px-4 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 hover:bg-gray-50"
                >
                    <div className="flex justify-between space-x-3">
                        <div className="min-w-0 flex-1">
                                <span className="absolute inset-0" aria-hidden="true" />
                                <p className="truncate text-sm font-medium text-gray-900">{message.sender}</p>
                                <p className="truncate text-sm text-gray-500">{message.subject}</p>
                        </div>
                        <time dateTime={message.datetime} className="flex-shrink-0 whitespace-nowrap text-sm text-gray-500">
                            {message.time}
                        </time>
                    </div>
                    <div className="mt-1">
                        <p className="text-sm text-gray-600 line-clamp-2">{message.preview}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}