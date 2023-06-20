import { createClient } from "@supabase/supabase-js";

export default createClient(
  "https://rhkixjuapchyaczxrtbs.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJoa2l4anVhcGNoeWFjenhydGJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODU0NDIzNTAsImV4cCI6MjAwMTAxODM1MH0.JOwSrH7iQ-_a1OchH76Z-ICcEU-KXdteTMzPEmIXP14"
);
// export default createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.SUPABASE_SERVICE_ROLE_KEY!
// );
