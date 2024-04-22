import Link from "next/link";

const Sidebar = ({ notes }) => {
  const roots = notes.filter((note) => !note.parent);
  const nonRoots = Object.groupBy(
    notes.filter((note) => note.parent),
    ({ parent }) => parent
  );

  return (
    <nav className='lg:block my-10'>
      <ul>
        <div className='relative mt-3 pl-2'>
          <div className='absolute inset-x-0 top-0 bg-zinc-800/2.5 will-change-transform dark:bg-white/2.5'></div>
          <div className='absolute inset-y-0 left-2 w-px bg-zinc-900/10 dark:bg-white/5'></div>
          <div className='absolute left-2 h-6 w-px bg-emerald-500'></div>
          <ul role='list' className='border-l border-transparent'>
            {roots.map((root) => (
              <li key={root.id} className='relative'>
                <Link
                  aria-current='page'
                  className='flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-900 transition dark:text-white'
                  href={`/docs/${root.id}`}
                >
                  <span className='truncate'>{root.title}</span>
                </Link>
                {nonRoots[root.id] && (
                  <ul role='list' className='border-l border-transparent'>
                    {nonRoots[root.id].map((subNote) => (
                      <li key={subNote.id}>
                        <Link
                          className='flex justify-between gap-2 py-1 pl-7 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'
                          href={`/docs/${root.id}/${subNote.id}`}
                        >
                          <span className='truncate'>{subNote.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </ul>
    </nav>
  );
};

export default Sidebar;
