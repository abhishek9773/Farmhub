import { createClient } from "./server";
import { User, AuthError } from "@supabase/supabase-js";

const supabaseLogin = async (): Promise<{
  data: User | null;
  error: AuthError | null;
}> => {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  return { data, error };
};

export default supabaseLogin;
